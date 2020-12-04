import styled, { keyframes } from "styled-components";
import { useMutation } from "@apollo/client";

import INSECT_ADD from "../../GraphQl/Mutations/INSECT_ADD";

import Select from "../DS/Select";
import Input from "../DS/Input";

import useFormData from "./useFormData";

export default function AddPopup({ close, refetch, _id }) {
  const { inputFields, selectField, toSend } = useFormData(_id);
  const [insectAdd] = useMutation(INSECT_ADD, {
    onCompleted: (res) => {
      if (res.insectAdd) {
        refetch();
        close();
      } else {
        alert("error");
      }
    },
  });

  return (
    <Shadow
      onClick={() => {
        close();
      }}
    >
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Create</h2>
        <SubTitle>
          Fill this form to submit a new insect in our database
        </SubTitle>
        <CloseIcon
          onClick={() => {
            close();
          }}
        >
          ✖️
        </CloseIcon>
        <Select
          name={selectField.name}
          options={selectField.options}
          value={selectField.key}
          valueChange={selectField.change}
        />
        <Limiter />
        {inputFields.map((field, index) => {
          return (
            <>
              <Input
                key={index}
                name={field.name}
                value={field.key}
                valueChange={field.change}
              />
              {index !== inputFields.length - 1 && <Limiter />}
            </>
          );
        })}
        <div>
          <button
            onClick={() => {
              insectAdd({ variables: { insect: toSend } });
            }}
          >
            Insecto crear
          </button>
        </div>
      </Wrapper>
    </Shadow>
  );
}

const onAppear = keyframes`
  from{
    background-color: rgba(0, 0, 0, 0);
  }
  to{
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${onAppear} 0.5s;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 40px 60px;
  background-color: white;
  display: flex;
  flex-direction: column;
  //  align-items : center;
  z-index: 1000;
  //border: solid 1px lightGrey;
  border-radius: 8px;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.05);
  & h2 {
    font-size: 2rem;
    margin-bottom: 8px;
  }
  & h4 {
  }
  & select {
    padding: 3px 6px;
    margin-bottom: 12px;
  }
  & button {
    margin-top: 24px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const CloseIcon = styled.span`
  transition: linear 0.05s;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  &:hover {
    transform: translateY(1px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

const SubTitle = styled.p`
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

const Limiter = styled.div`
  height: 1px;
  width: 60%;
  background-color: lightGrey;
  margin: auto;
  margin-top: 6px;
  margin-bottom: 6px;
`;
