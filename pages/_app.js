import { ApolloProvider } from "@apollo/client";
import client from "../GraphQl/config";

import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/DS/Layout"), {
  ssr: false,
});

import { StateProvider } from "../store.js";

import "../styles/globals.css";
import "../styles/locomotive.css";
import "../styles/icomoon.css";
import "../styles/linear_icons.css";

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
