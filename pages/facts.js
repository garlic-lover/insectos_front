import useTranslate from "../hooks/useTranslate";

import styled from "styled-components";

import Deck from "../components/Cards/Deck";

export default function Home() {
  const { t } = useTranslate();

  return (
    <Container>
      <h2>{t("cards")}</h2>
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
`;

const CardsWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
