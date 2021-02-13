import { useRouter } from "next/router";
import styled from "styled-components";

import Quiz from "./Quiz";

export default function FirstBloc({ t, quizRef, scrollToAbout }) {
  const router = useRouter();

  return (
    <Back id="quizzContainer" ref={quizRef}>
      <Wrapper>
        <h2>Una pequeña pregunta...</h2>
        <h4>¿Cuantas especies de insectos comestibles hay en México ? </h4>
        <Quiz />
      </Wrapper>
      <ScrollDown
        onClick={() => {
          scrollToAbout();
        }}
      >
        Más sobre Insectivora <span className="lnr lnr-chevron-down-circle" />
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
  min-height: calc(100vh - 90px);
  display: flex;
  position: relative;
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
  position: relative;
  & h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  & h4 {
    margin-bottom: 36px;
    font-size: 1rem;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 40px;
    & h2 {
      font-size: 1.6rem;
      line-height: 2.2rem;
      margin-bottom: 12px;
      margin-top: -48px;
    }
    & h4 {
      width: 80%;
      text-align: center;
      line-height: 20px;
    }
  }
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
  @media (max-width: 680px) {
    bottom: 14px;
    right: 14px;
  }
`;
