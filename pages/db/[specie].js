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
    eatableStates,
    isSold,
    isAutoConsummed,
    isComestible,
    isMedicinal,
    isTradicional,
  } = insect;

  return (
    <Wrapper>
      <h2>{specie}</h2>
      <p>{commonNames}</p>
      <p>Order : {order?.main}</p>
      <p>Familia : {family}</p>
      <h3>Notes</h3>
      <p>{notes ? notes : "No notes"}</p>
      <h3>Referencias bibliograficas:</h3>
      <ul>
        {references.map(({ clave }) => {
          return <li key={clave}>{clave}</li>;
        })}
      </ul>
      <h3>Estados : </h3>
      {estados.map(({ name }) => {
        return <li key={name}>{name}</li>;
      })}
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
    margin-bottom: 32px;
  }
  & h3 {
    margin: 12px 0;
  }
  & p {
    margin: 0;
    margin-bottom: 12px;
  }
  & li {
    line-height: 1.5;
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
