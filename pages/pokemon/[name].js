import Layout from "../../components/layout";
import Link from "next/link";
import Router from "next/router";
import fetch from "isomorphic-unfetch";

const Post = (props, router) => {
  console.log(Link);
  console.log(Router);

  const pokemon = props.pokemonInfo;

  return (
    <Layout>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.weight}</p>
      <img src={pokemon.sprites.front_default} />
      <button onClick={() => Router.back()} >Voltar</button>
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  /**@Context contém todos os dados e metadados da página */
  const { name } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonInfo = await res.json();

  return { pokemonInfo };
};

export default Post;
