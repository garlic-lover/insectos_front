import styled, { ThemeProvider } from "styled-components";

import Header from "../Header/Header";
import GlobalStyles from "./GlobalStyles";

import theme from "./theme.json";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  padding: 2rem;
`;
