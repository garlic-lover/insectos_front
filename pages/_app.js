import { ApolloProvider } from "@apollo/client";
import client from "../GraphQl/config";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/DS/Layout"), {
  ssr: false,
});

import { StateProvider } from "../store.js";

import "../styles/globals.css";
import "../styles/locomotive.css";
import "../styles/icomoon.css";
import "../styles/linear_icons.css";
import "../styles/loader.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <ApolloProvider client={client}>
        <StateProvider>
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </StateProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
