import Header from "./header";
import Head from "next/head";
import { Container } from "semantic-ui-react";
export default (props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>

      </Head>
      <Header />
      <Container>{props.children}</Container>
    </div>
  );
};
