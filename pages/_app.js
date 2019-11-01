// pages/_app.js
import App, { Container } from "next/app";
import React from "react";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  state = { foo: "" };

  setFoo = foo => this.setState({ foo });

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} foo={this.state.foo} setFoo={this.setFoo} />
      </Container>
    );
  }
}
