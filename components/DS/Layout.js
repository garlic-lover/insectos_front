import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LocomotiveScroll from "locomotive-scroll";

import Header from "../Header/Header";
import Footer from "../Footer";
import GlobalStyles from "./GlobalStyles";

// import theme from "./theme.json";

import useAppContext from "@hooks/useAppContext";

export default function Layout({ children }) {
  const [theme, themeChange] = useState({
    background: "#d7c79e",
    main: "#a35638",
    color2: "rgba(121, 147, 82, 0.4)",
    color3: "#9dab86",
  });
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
      <ColorChanger>
        <div>
          <h5>Background : </h5>
          <input
            value={theme.background}
            onChange={(ev) => {
              let theTheme = { ...theme };
              theTheme.background = ev.target.value;
              themeChange(theTheme);
            }}
          />
        </div>
        <div>
          <h5>Main : </h5>
          <input
            value={theme.main}
            onChange={(ev) => {
              let theTheme = { ...theme };
              theTheme.main = ev.target.value;
              themeChange(theTheme);
            }}
          />
        </div>
        <div>
          <h5>Color 2 : </h5>
          <input
            value={theme.color2}
            onChange={(ev) => {
              let theTheme = { ...theme };
              theTheme.color2 = ev.target.value;
              themeChange(theTheme);
            }}
          />
        </div>
        <div>
          <h5>Color 3 : </h5>
          <input
            value={theme.color3}
            onChange={(ev) => {
              let theTheme = { ...theme };
              theTheme.color3 = ev.target.value;
              themeChange(theTheme);
            }}
          />
        </div>
      </ColorChanger>
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

const ColorChanger = styled.div`
  position: fixed;
  bottom: 12px;
  right: 12px;
  & div {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  & h5 {
    margin-right: 6px;
    width: 120px;
  }
`;
