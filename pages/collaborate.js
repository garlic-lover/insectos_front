import styled from "styled-components";

import dynamic from "next/dynamic";

const TypeForm = dynamic(() => import("../components/Collaborate/Typeform"), {
  ssr: false,
});

export default function Collaborate() {
  return (
    <Wrapper>
      <h2>Want to collaborate ? </h2>
      <SubTitle>Everybody is welcome !</SubTitle>
      {/*  <Row>
        <h3>Biologists</h3>
        <h3>Developpers</h3>
        <h3>Anthropologists</h3>
        <h3>Designers</h3>
      </Row> */}
      <TypeformWrapper>
        <TypeForm />
      </TypeformWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  text-align: center;
  & h2 {
    font-size: 1.6rem;
    margin-bottom: 36px;
  }
`;

const SubTitle = styled.p`
  text-decoration: underline;
`;

const Row = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const TypeformWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 40px;
  height: 540px;
`;
