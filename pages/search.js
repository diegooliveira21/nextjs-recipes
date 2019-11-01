import React from "react";
import Link from "next/link";
import Nav from "../components/nav";

const Search = () => {
  return (
    <>
      <Nav />
      <input type="text" placeholder="Texte here "></input>
      <button style={{ backgroundColor: "blue" }}>Search</button>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
};

export default Search;
