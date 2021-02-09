import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LocomotiveScroll from "locomotive-scroll";

import Header from "../Header/Header";
import Footer from "../Footer";
import GlobalStyles from "./GlobalStyles";

import useAppContext from "@hooks/useAppContext";

function ThemeChanger({ theme, themeChange }) {
  const [isOpened, isOpenedChange] = useState(false);

  if (!isOpened) {
    return (
      <ColorChanger isOpened={isOpened}>
        <button
          onClick={() => {
            isOpenedChange(true);
          }}
        >
          Cambiar los colores
        </button>
      </ColorChanger>
    );
  }

  return (
    <ColorChanger isOpened={isOpened}>
      <span
        onClick={() => {
          isOpenedChange(false);
        }}
      >
        <img src="/svg/close.svg" alt="color picker close" />
      </span>
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
  );
}

export default function Layout({ children }) {
  const [theme, themeChange] = useState({
    background: "#f6f5f5",
    main: "#a35638",
    color2: "rgba(121, 147, 82, 0.4)",
    color3: "#9dab86",
  });

  // rgb(242, 237, 227)
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
    if (theScroll && router.pathname === "article_add") {
      theScroll.destroy();
    } else if (theScroll) {
      theScroll.destroy();
      theScroll.init();
    }
  }, [router.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles menuOpened={menuOpened} />
      <Main data-scroll data-scroll-container id="stick">
        <Header />
        <Container isHomePage={router.pathname === "/"}>{children}</Container>
        <Footer />
      </Main>
      <ThemeChanger theme={theme} themeChange={themeChange} />
    </ThemeProvider>
  );
}

const Main = styled.div`
  background-color: rgb(242, 237, 227);
`;

const Container = styled.div`
  padding-top: ${(props) => (props.isHomePage ? "" : "90px")};
  max-width: 100% !important;
  overflow-x: hidden !important;
  @media (max-width: 680px) {
    padding-top: ${(props) => (props.isHomePage ? "" : "70px")};
  }
`;

const ColorChanger = styled.div`
  position: fixed;
  bottom: 12px;
  left: 12px;
  background-color: ${(props) => props.isOpened && "rgba(255,255, 255, 0.4)"};
  padding: ${(props) => props.isOpened && "44px 12px 6px 12px"};
  & div {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  & h5 {
    margin-right: 6px;
    width: 120px;
  }
  & span {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }
`;
