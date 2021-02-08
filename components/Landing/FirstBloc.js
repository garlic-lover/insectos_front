import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function FirstBloc({ t, quizRef }) {
  const [value, valueChange] = useState(0);
  const router = useRouter();

  return (
    <Back id="quizzContainer" ref={quizRef}>
      <Wrapper>
        <h2>Una pequena pregunta...</h2>
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
      </Wrapper>
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
    margin-bottom: 48px;
    line-height: 2.6rem;
    text-align: center;
  }
  & button {
    margin-top: 12px;
    color: rgb(23, 119, 87);
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
