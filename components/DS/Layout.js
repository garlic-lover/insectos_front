import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LocomotiveScroll from "locomotive-scroll";

import Header from "../Header/Header";
import Footer from "../Footer";
import GlobalStyles from "./GlobalStyles";

import theme from "./theme.json";

import useAppContext from "@hooks/useAppContext";

export default function Layout({ children }) {
  const router = useRouter();

  const {
    state: { menuOpened, theScroll },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    if (!theScroll) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 0.7,
      });
      dispatch({ type: "theScrollChange", theScroll: scroll });
    }
  }, [theScroll]);

  useEffect(() => {
    if (theScroll) {
      theScroll.destroy();
      theScroll.init();
    }
  }, [router.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles menuOpened={menuOpened} />
      <Main data-scroll-container>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.div``;

const Container = styled.div`
  margin-top: 20px;
  max-width: 100% !important;
  overflow-x: hidden !important;
  @media (max-width: 680px) {
    margin-top: 70px;
  }
`;
