import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function FirstBloc({ t, quizRef }) {
  const [value, valueChange] = useState(null);
  const router = useRouter();

  return (
    <Back ref={quizRef}>
      <Wrapper>
        <h2>Una pequena pregunta...</h2>
        <NumberInput
          value={value}
          onChange={(e) => {
            valueChange(Number(e.target.value));
          }}
          placeholder="Your guess"
          type="number"
          min={0}
        />
        <button>Verificar</button>
      </Wrapper>
    </Back>
  );
}

const Back = styled.div`
  background-color: #d7c79e;
  background-color: rgb(23, 119, 87);
  //background-color: #295939;
  color: rgb(255, 255, 255, 0.8);
  color: ${(props) => props.theme.background};
  height: calc(100vh - 90px);
  display: flex;
  @media (max-width: 680px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  & div {
    width: 40%;
  }
  & p {
    margin-bottom: 6px;
    opacity: 0.9;
  }
  & h2 {
    font-size: 2rem;
    margin-bottom: 4rem;
    line-height: 2.4rem;
  }
  & button {
    margin-top: 12px;
    color: rgb(23, 119, 87);
    background-color: ${(props) => props.theme.background};
    border-color: ${(props) => props.theme.background};
  }
  @media (max-width: 680px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 40px;
    & div {
      width: 100%;
    }
    & h2 {
      font-size: 1.6rem;
      line-height: 2rem;
      margin-bottom: 12px;
    }
    & button {
      margin: auto;
      margin-top: 36px;
      display: block;
      margin-bottom: 36px;
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
  margin-bottom: 36px;
  width: 340px;
`;

/* 
  <div>
          <p>Comer insectos... </p>
          <h2>{t("homeTitle")}</h2>
          <p>
            La comida con insectos será la próxima tendancia en la gastronomia
            mundial. Y tú, ¿te los imaginas en tu plato?
          </p>
          <button
            onClick={() => {
              router.push("/facts");
            }}
          >
            Más información
          </button>
        </div> 
*/
