import { useRouter } from "next/router";
import styled from "styled-components";

export default function FirstBloc({ t }) {
  const router = useRouter();

  return (
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
      <Chapulines src="/images/chapulines.jpg" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  margin-bottom  100px;
  margin-top : 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    width: 40%;
  }
  & p {
  //   color: ${(props) => props.theme.color2};
    margin-bottom: 6px;
    opacity: 0.7;
  }
  & h2 {
    font-size: 1.8rem;
    margin-bottom: 18px;
  }
  & button {
    margin-top: 12px;
  }
  @media (max-width: 680px) {
    flex-direction : column;
    margin-top : 20px;
    margin-bottom : 40px;
    & div{
      width : 100%
    }
    & h2 {
      font-size: 1.6rem;
      line-height : 2rem;
      margin-bottom: 12px;
    }
    & button {
      margin : auto;
      margin-top: 36px;
      display : block;
      margin-bottom: 36px
    }
  }
`;

const Chapulines = styled.img`
  width: auto;
  max-width: 53%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
  @media (max-width: 680px) {
    max-width: 84%;
  }
`;
