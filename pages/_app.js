import { ApolloProvider } from "@apollo/client";
import client from "../GraphQl/config";

import { StateProvider } from "../store.js";

import "../styles/globals.css";

import Layout from "../components/DS/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <StateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
