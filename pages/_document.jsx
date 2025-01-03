import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
    return (<Html lang="en">
      <Head />
      <title>CepFinder</title>
      <link rel="icon" href="/iconcep.png" type="image/png"/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>);
}
