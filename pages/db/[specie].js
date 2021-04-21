import styled from "styled-components";

import request from "@GraphQl/requestWithoutApollo";
import INSECT from "@GraphQl/Queries/INSECT";

export default function Specie({ insect }) {
  if (!insect) {
    return <Wrapper>Error : insect not found</Wrapper>;
  }
  const {
    order,
    commonNames,
    estados,
    family,
    references,
    specie,
    notes,
  } = insect;

  return (
    <Wrapper>
      <h2>{specie}</h2>
      <p>{commonNames}</p>
      <p>Order : {order?.main}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 110px);
  margin: auto;
  margin-top: 50px;
  width: 97%;
  max-width: 1040px;
  & h2 {
    font-size: 32px;
    font-style: italic;
  }
`;

export async function getStaticPaths() {
  return {
    paths: [{ params: { specie: "Liometum apiculatum" } }],
    fallback: true,
  };
}

export async function getStaticProps(params) {
  const variables = {
    specie: params.params.specie,
  };

  let res = await request(INSECT, variables);

  if (!res.insect) {
    return { props: { insect: null } };
  }

  return {
    props: { insect: res.insect },
  };
}
