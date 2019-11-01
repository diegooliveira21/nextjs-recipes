// pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";
import Layout from "../components/layout";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="teste_doument" attr="asd" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
