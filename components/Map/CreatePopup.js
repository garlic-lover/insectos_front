import { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";

import INSECT_ADD from "../../GraphQl/Mutations/INSECT_ADD";

export default function AddPopup({ close, _id }) {
  const [commonName, commonNameChange] = useState("");
  const [insectAdd] = useMutation(INSECT_ADD, {
    onCompleted: (res) => {
      if (res.insectAdd) {
        close();
      } else {
        alert("error");
      }
    },
  });
  console.log(_id);
  return (
    <Wrapper>
      <input
        placeholder="Nombre comuno"
        value={commonName}
        onChange={(ev) => {
          commonNameChange(ev.target.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            insectAdd({ variables: { commonName, estado: _id } });
          }}
        >
          Insecto crear
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  & input {
    padding: 3px 6px;
  }
`;
