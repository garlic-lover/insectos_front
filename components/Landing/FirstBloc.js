import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function FirstBloc({ t, quizRef, scrollToAbout }) {
  const [value, valueChange] = useState(0);
  const [result, resultChange] = useState(null);
  const router = useRouter();

  return (
    <Back id="quizzContainer" ref={quizRef}>
      <Wrapper
        onSubmit={(e) => {
          e.preventDefault();
          if (value >= 500) {
            resultChange("true");
          } else {
            resultChange("false");
          }
        }}
      >
        <h2>Una pequena pregunta...</h2>
        <h4>Cuantas especies de insectos comestibles hay en Mexico ? </h4>
        <NumberInput
          value={value}
          onChange={(e) => {
            if (!Number.isNaN(Number(e.target.value))) {
              valueChange(Number(e.target.value));
            }
          }}
          placeholder="Your guess"
          min={0}
        />
        <button>Verificar</button>
        {result && (
          <Result result={result}>
            {result === "true"
              ? "Exact : il y en a en effet plus de 500"
              : "Faux ! Il y en a en fait plus de 500 ans !"}
          </Result>
        )}
      </Wrapper>
      <ScrollDown
        onClick={() => {
          scrollToAbout();
        }}
      >
        Mas sobre Insectivora <span className="lnr lnr-chevron-down-circle" />
      </ScrollDown>
    </Back>
  );
}

const Back = styled.div`
  background-color: rgb(23, 119, 87);
  //background-color: #295939;
  //background-color : #9dad7f;
  background-color: rgba(162, 140, 56, 0.9);
  color: rgb(255, 255, 255, 0.8);
  color: ${(props) => props.theme.background};
  height: calc(100vh - 90px);
  display: flex;
  position: relative;
  @media (max-width: 680px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Wrapper = styled.form`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  & h2 {
    font-size: 2rem;
    margin-bottom: 28px;
    text-align: center;
  }
  & h4 {
    margin-bottom: 16px;
    font-size: 1rem;
  }
  & button {
    margin-top: 12px;
    color: rgb(162, 140, 56);
    background-color: white;
    border-color: white;
    padding: 14px 32px;
    font-size: 18px;
    border-radius: 4rem;
    letter-spacing: 2px;
    font-family: Montserrat;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 40px;
    & h2 {
      font-size: 1.8rem;
      line-height: 2.8rem;
      margin-bottom: 12px;
    }
  }
`;

const NumberInput = styled.input`
  color: white;
  border-color: white;
  border: none;
  border-bottom: solid 2px;
  border-radius: 0;
  font-size: 4rem;
  margin-bottom: 48px;
  width: 140px;
  text-align: center;
`;

const Result = styled.p`
  position: absolute;
  bottom: -50px;
  transform: translateY(100%);
  color: ${(props) => (props.result === "true" ? "" : "red")};
`;

const ScrollDown = styled.p`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: flex-end;
  font-size: 1.1rem;
  cursor: pointer;
  & span {
    margin-left: 12px;
    font-size: 2.4rem;
    margin-bottom: 3px;
  }
`;
