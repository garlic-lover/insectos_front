import styled from "styled-components";

import request from "@GraphQl/requestWithoutApollo";
import INSECT from "@GraphQl/Queries/INSECT";

import FamilyBloc from "@components/InsectPage/FamilyBloc";
import BiblioBloc from "@components/InsectPage/BiblioBloc";
import CharacteristicsBloc from "@components/InsectPage/CharacteristicsBloc";
import StatesBloc from "@components/InsectPage/StatesBloc";

export default function Specie({ insect }) {
  if (!insect) {
    return <Wrapper>Error : insect not found</Wrapper>;
  }
  const { estados, references, specie, notes } = insect;

  return (
    <Wrapper>
      <h2>{specie}</h2>
      <FamilyBloc insect={insect} />
      <h3>Notes</h3>
      <Notes>{notes ? notes : "-"}</Notes>
      <CharacteristicsBloc insect={insect} />
      <StatesBloc estados={estados} />
      <BiblioBloc references={references} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 90px);
  margin: auto;
  margin-top: 30px;
  margin-bottom: 32px;
  width: 97%;
  max-width: 1040px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    font-size: 32px;
    font-style: italic;
    margin-bottom: 24px;
    padding-bottom: 24px;
    width: 90%;
    max-width: 600px;
    text-align: center;
    border-bottom: solid 1px;
  }
  & h3 {
    margin-bottom: 24px;
    font-size: 20px;
  }
`;

const Notes = styled.p`
  margin: 0;
  margin-bottom: 24px;
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
