import { useState } from "react";
import styled from "styled-components";

import useTranslate from "@hooks/useTranslate";

const options = {
  fr: ["35 espèces", "150 espèces", "Plus de 500 espèces"],
  es: ["35 especies", "150 especies", "Más de 500 especies"],
  en: ["35 species", "150 species", "More than 500 species"],
};

export default function Quiz() {
  const { t, lang } = useTranslate();
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
          {options[lang].map((opt, index) => {
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
            ? t("landing").check
            : result === "true"
            ? t("landing").congratulations
            : t("landing").tryAgain}
        </Button>
      </form>
      {result && (
        <Result result={result}>
          {result === "true"
            ? t("landing").answerTrue
            : t("landing").answerFalse}
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
        ? "seagreen"
        : props.isSelected && props.isGood === "false"
        ? "brown"
        : props.isSelected
        ? "white"
        : "lightgrey"};
  color: ${(props) =>
    props.isSelected && props.isGood === "true"
      ? "seagreen"
      : props.isSelected && props.isGood === "false"
      ? "brown"
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
      ? "seagreen"
      : props.isGood === "false"
      ? "brown"
      : "white"};
  border-color: ${(props) =>
    props.isGood === "true"
      ? "seagreen"
      : props.isGood === "false"
      ? "brown"
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
  color: ${(props) => (props.result === "true" ? "" : "brown")};
`;
