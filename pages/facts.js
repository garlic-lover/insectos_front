import { useEffect, useState } from "react";
import useTranslate from "../hooks/useTranslate";

import styled from "styled-components";

import Deck from "../components/Cards/Deck";

export default function Home() {
  const [page, pageChange] = useState(0);
  const [facts, factsChange] = useState([]);
  const { t, lang } = useTranslate();

  useEffect(async () => {
    // Fetch the facts from google sheet

    let { values } = await fetch(`/api/sheetsFetch`).then((theRes) =>
      theRes.json()
    );
    factsChange(values);
  }, []);

  return (
    <Container>
      <CardsWrapper>
        <Deck facts={facts} t={t} lang={lang} />
      </CardsWrapper>
    </Container>
  );
}

const Container = styled.div`
  & h2 {
    font-size: 2rem;
  }
  // min-height: 80vh;
  //  border: solid 1px white;
`;

const CardsWrapper = styled.div`
  /*   position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  justify-content: center;
`;
