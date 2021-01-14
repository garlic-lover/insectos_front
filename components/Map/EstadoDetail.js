import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import ESTADO from "../../GraphQl/Queries/ESTADO";

import Insect from "./Insect";
import CreatePopup from "./CreatePopup";

export default function EstadoDetail({ currentState }) {
  return (
    <Wrapper>
      <Content currentState={currentState} />
    </Wrapper>
  );
}

function Content({ currentState: { state_name, state_code } }) {
  const [displayPopup, displayPopupChange] = useState(false);
  const { error, loading, data, refetch } = useQuery(ESTADO, {
    variables: { state_code },
  });

  if (!state_code) {
    return <h4>No estado selectionado</h4>;
  }

  if (error) {
    console.log(error);
    return null;
  }
  if (loading || !data.estado) {
    return null;
  }

  const { _id, insects } = data.estado;

  return (
    <>
      <h3>Estado : {state_name}</h3>
      <List>
        {insects.length === 0 &&
          "No insect found in our database for this insect"}
        {insects.map((insect, index) => {
          return <Insect key={index} insect={insect} />;
        })}
      </List>

      <button
        onClick={() => {
          displayPopupChange(true);
        }}
      >
        Add insect
      </button>
      {displayPopup && (
        <CreatePopup
          _id={_id}
          close={() => {
            displayPopupChange(false);
          }}
          refetch={refetch}
        />
      )}
    </>
  );
}

const Wrapper = styled.div`
  z-index: 100;
  width: calc(38% - 24px);
  // border: solid 1px #dddddd;
  padding-top: 24px;
  padding-left: 24px;
  height: 454px;
  overflow: scroll;
  padding-bottom: 20px;
  & h3 {
    margin-bottom: 24px;
    font-size: 1.4rem;
  }
  & p {
  }
  & button {
    transition: ease-in-out 0.25s;
    padding: 12px 24px;
  }
  & button:hover {
  }
`;

const List = styled.ul`
  margin-bottom: 24px;
`;
