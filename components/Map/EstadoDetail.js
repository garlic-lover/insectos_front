import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import ESTADO from "../../GraphQl/Queries/ESTADO";

import useTranslate from "@hooks/useTranslate";

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
  const { t } = useTranslate();
  const [displayPopup, displayPopupChange] = useState(false);
  const { error, loading, data, refetch } = useQuery(ESTADO, {
    variables: { state_code },
  });

  if (!state_code) {
    return <h4>{t("noSelectedState")}</h4>;
  }

  if (error) {
    console.log(error);
    return null;
  }
  if (loading /* || !data.estado */) {
    return null;
  }

  const { _id, insects } = data.estado;

  return (
    <>
      <h3>
        {t("state")} : {state_name}
      </h3>
      <List>
        {insects.length === 0 &&
          "No insect found in our database for this insect"}
        {insects.map((insect, index) => {
          return <Insect key={index} insect={insect} />;
        })}
      </List>
      <button
        onClick={() => {
          alert(t("availableSoon"));
          //displayPopupChange(true);
        }}
      >
        {t("insectAdd")}
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
  width: calc(38% - 24px);
  // border: solid 1px #dddddd;
  padding-top: 12px;
  padding-left: 24px;
  height: 454px;
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
  @media (max-width: 680px) {
    width: 100%;
    padding-left: 0;
    height: inherit;
    display: flex;
    flex-direction: column;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-bottom: 24px;
  width: 100%;
  padding: 0;
  max-height: 370px;
  overflow-y: scroll;
  overflow-x: visible;
  @media (max-width: 680px) {
    max-height: 80vh;
  }
`;
