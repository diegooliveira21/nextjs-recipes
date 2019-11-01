import React, { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/layout";

const Unique = dynamic(import("../components/image"));

const One = dynamic({
  // you can add or remove components based on props
  modules: props => ({
    Hello: import("../components/hello")
  }),
  render: (props, { Hello }) => (
    <div>
      <h1>{props.title}</h1>
      <Hello />
    </div>
  )
});

const Multiple = dynamic({
  // you can add or remove components based on props
  modules: props => ({
    Nav: import("../components/nav"),
    Hello: import("../components/hello")
  }),
  render: (props, { Nav, Hello }) => (
    <div>
      <h1>{props.title}</h1>
      <Nav />
      <Hello />
    </div>
  )
});

const Lazy = () => {
  const [show, setShow] = useState(null);

  if (show === "One" || show === "Unique") {
    return (
      <Layout>
        <Unique />
      </Layout>
    );
  } else if (show === "Multiples") {
    return <Multiple />;
  } else {
    return (
      <>
        <button onClick={() => setShow("One")}>Show One!</button>
        <button onClick={() => setShow("Multiples")}>Show Multiples!</button>
        <button onClick={() => setShow("Unique")}>Unique</button>
      </>
    );
  }
};

export default Lazy;
