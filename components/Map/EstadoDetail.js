import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import ESTADO from "../../GraphQl/Queries/ESTADO";

import CreatePopup from "./CreatePopup";

export default function EstadoDetail({
  currentState: { state_name, state_code },
}) {
  const [displayPopup, displayPopupChange] = useState(false);
  const { error, loading, data, refetch } = useQuery(ESTADO, {
    variables: { state_code },
  });

  if (error) {
    console.log(error);
    return null;
  }
  if (loading || !data.estado) {
    return null;
  }

  const { _id, insects } = data.estado;

  return (
    <Wrapper>
      <h3>{state_name}</h3>
      {insects.length === 0 && (
        <p>No insect found in our database for this insect</p>
      )}
      {insects.map((insect, index) => {
        console.log(insect);
        return <p key={index}>{insect.commonNames}</p>;
      })}
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 100;
  width: 35%;
  & h3 {
    margin-bottom: 24px;
    font-size: 1.4rem;
  }
  & p {
  }
  & button {
    transition: ease-in-out 0.25s;
    border: solid 1px lightGrey;
    padding: 12px 24px;
  }
  & button:hover {
    border-color: rgb(0, 0, 0, 0.6);
  }
`;
