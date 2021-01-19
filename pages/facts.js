import useTranslate from "../hooks/useTranslate";

import styled from "styled-components";

import Deck from "../components/Cards/Deck";

export default function Home() {
  const { t } = useTranslate();

  return (
    <Container>
      <CardsWrapper>
        <Deck />
      </CardsWrapper>
    </Container>
  );
}

const Container = styled.div`
  & h2 {
    font-size: 2rem;
  }
  // min-height: 80vh;
  // border: solid 1px white;
`;

const CardsWrapper = styled.div`
  /*   position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  justify-content: center;
`;
