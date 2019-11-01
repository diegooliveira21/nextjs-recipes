import Layout from "../components/layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const Api = props => {
  const router = useRouter();
  console.log(router);

  return (
    <Layout>
      <h1>Pokemons List</h1>
      <ul>
        {props.pokemonsList.map(pokemon => (
          <li key={pokemon.name}>
            <Link
              href="/pokemon/[name]"
              as={`/pokemon/${pokemon.name}`}
              params={{ hello: "Hello World" }}

            >
              <a>{pokemon.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          li {
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
            background-color: #fff;
            margin: 9px;
            border-radius: 15px;
          }

          ul {
            list-style: none;
          }

          a {
            display: block;
            padding: 24px;
            color: #000;
            text-decoration: none;
            text-transform: capitalize;
          }
        `}
      </style>
    </Layout>
  );
};
// <Component>.getInitialProps -> Pass result as props to component
Api.getInitialProps = async function() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();

  return {
    // Aqui o props acessado e o objeto será criado a partir desse return
    pokemonsList: data.results.map(pokemon => pokemon)
  };
};

export default Api;
