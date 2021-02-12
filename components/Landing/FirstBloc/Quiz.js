import { useState } from "react";
import styled from "styled-components";

const options = ["35 especies", "150 especies", "Mas de 500 especies"];

export default function Quiz() {
  const [value, valueChange] = useState(0);
  const [result, resultChange] = useState(null);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value === 2) {
            resultChange("true");
          } else {
            resultChange("false");
          }
          if (result === "false") {
            resultChange(null);
          }
        }}
      >
        <Options>
          {options.map((opt, index) => {
            return (
              <Option
                isSelected={index === value}
                isGood={result}
                key={index}
                onClick={() => {
                  if (!result) {
                    valueChange(index);
                  }
                }}
              >
                {opt}
              </Option>
            );
          })}
        </Options>
        <Button isGood={result} onClick={() => {}}>
          {!result
            ? "Verificar"
            : result === "true"
            ? "Felicidades"
            : "Volver a intentar"}
        </Button>
      </form>
      {result && (
        <Result result={result}>
          {result === "true"
            ? "Correcto: de hecho, hay más de 500"
            : "Falso ! Puedes intentarlo de nuevo"}
        </Result>
      )}
    </>
  );
}

const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  margin-bottom: 24px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Option = styled.p`
  cursor: pointer;
  transition: linear 0.2s;
  border: solid 2px
    ${(props) =>
      props.isSelected && props.isGood === "true"
        ? "green"
        : props.isSelected && props.isGood === "false"
        ? "red"
        : props.isSelected
        ? "white"
        : "lightgrey"};
  color: ${(props) =>
    props.isSelected && props.isGood === "true"
      ? "green"
      : props.isSelected && props.isGood === "false"
      ? "red"
      : props.isSelected
      ? "white"
      : "lightgrey"};
  padding: 30px;
  font-size: 20px;
  border-radius: 20px;
  text-align: center;
  @media (max-width: 700px) {
    padding: 15px 20px;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 100%);
  transition: linear 0.5s;
  min-width: 200px;
  color: ${(props) => (props.isGood ? "white" : "rgb(162, 140, 56)")};
  background-color: ${(props) =>
    props.isGood === "true"
      ? "green"
      : props.isGood === "false"
      ? "red"
      : "white"};
  border-color: ${(props) =>
    props.isGood === "true"
      ? "green"
      : props.isGood === "false"
      ? "red"
      : "white"} !important;
  border-color: white;
  padding: 14px 32px;
  font-size: 18px;
  border-radius: 4rem;
  letter-spacing: 2px;
  font-family: Montserrat;
  @media (max-width: 700px) {
    bottom: 60px;
  }
`;

const Result = styled.p`
  position: absolute;
  bottom: -100px;
  transform: translateY(100%);
  color: ${(props) => (props.result === "true" ? "" : "red")};
`;
