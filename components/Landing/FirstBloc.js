import { useRouter } from "next/router";
import styled from "styled-components";

export default function FirstBloc({ t }) {
  const router = useRouter();

  return (
    <Back>
      <Wrapper>
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
        {/*  <Chapulines src="/images/chapulines.jpg" /> */}
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
  padding-top: 100px;
  padding-bottom: 100px;
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
  justify-content: space-between;
  align-items: center;
  & div {
    width: 40%;
  }
  & p {
    //   color: ${(props) => props.theme.color2};
    margin-bottom: 6px;
    opacity: 0.9;
  }
  & h2 {
    font-size: 2rem;
    margin-bottom: 18px;
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

const Chapulines = styled.img`
  width: auto;
  max-width: 60%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
  position: relative;
  transform: translateX(10%);
  @media (max-width: 680px) {
    max-width: 94%;
    transform: translateX(0%);
  }
`;
