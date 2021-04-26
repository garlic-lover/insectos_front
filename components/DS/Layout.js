import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

import {
  createMuiTheme,
  ThemeProvider as MaterialProvider,
} from "@material-ui/core/styles";

import Header from "../Header/Header";
import Footer from "../Footer";
import GlobalStyles from "./GlobalStyles";

import useAppContext from "@hooks/useAppContext";

export default function Layout({ children }) {
  const materialTheme = createMuiTheme({
    typography: {
      button: {
        fontFamily: '"Montserrat", Open Sans',
      },
    },
  });

  const [theme, themeChange] = useState({
    background: "#f6f5f5",
    background2: "rgb(242, 237, 227)",
    main: "#a35638",
    color2: "rgba(121, 147, 82, 0.4)",
    color3: "#9dab86",
  });

  const router = useRouter();

  const {
    state: { menuOpened },
  } = useAppContext();

  return (
    <MaterialProvider theme={materialTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles menuOpened={menuOpened} />
        <Main data-scroll data-scroll-container id="stick">
          <Header />
          <Container isHomePage={router.pathname === "/"}>{children}</Container>
          {router.pathname !== "/db" && <Footer />}
        </Main>
      </ThemeProvider>
    </MaterialProvider>
  );
}

const Main = styled.div`
  background-color: rgb(242, 237, 227);
`;

const Container = styled.div`
  padding-top: ${(props) => (props.isHomePage ? "" : "60px")};
  max-width: 100% !important;
  overflow-x: hidden !important;
  @media (max-width: 680px) {
    padding-top: ${(props) => (props.isHomePage ? "" : "60px")};
  }
`;
