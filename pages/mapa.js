import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map/Container"), {
  ssr: false,
});

import About from "../components/Map/AboutTheMap";

import styled from "styled-components";
import { useState } from "react";

export default function MapPage() {
  const [page, pageChange] = useState(0);

  return (
    <Wrapper>
      <PageSelect>
        <nav>
          <PageOption
            isSelected={page === 0}
            onClick={() => {
              pageChange(0);
            }}
          >
            Mapa
          </PageOption>
          <PageOption
            isSelected={page === 1}
            onClick={() => {
              pageChange(1);
            }}
          >
            Instruciones
          </PageOption>
        </nav>
      </PageSelect>
      {page === 0 && <Map />}
      {page === 1 && <About />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  min-height: calc(100vh - 150px);
  margin-top: 30px;
  @media (max-width: 680px) {
    margin-top: 20px;
  }
`;

const PageSelect = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  & nav {
    display: flex;
    background-color: ${(props) => props.theme.background2};
    border: solid 1px;
    border-radius: 16px;
  }
  @media (max-width: 680px) {
    margin-bottom: 20px;
    font-size: 12px;
  }
`;

const PageOption = styled.p`
  min-width: 100px;
  padding: 6px 12px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? props.theme.main : "")};
  color: ${(props) => (props.isSelected ? props.theme.background2 : "")};
`;
