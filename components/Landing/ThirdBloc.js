import { useRouter } from "next/router";
import styled from "styled-components";

export default function ThirdBloc() {
  const router = useRouter();

  return (
    <Wrapper>
      <section>
        <Title className="hidden" data-scroll data-scroll-class="appear">
          ¿Quiénes somos ?
        </Title>
        <p className="hidden" data-scroll data-scroll-class="appear">
          <span>Insectívora</span> es producto de un equipo multidisciplinario
          apasionado por la entomología y los insectos comestibles. Nuestros
          esfuerzos están enfocados en gestar un medio que ahonde en la
          entomofagia, que recopile, genere y difunda esta información con
          integridad moral y un enfoque sustentable.
        </p>
        <p>
          Nos interesa la inclusión social; la participación y el libre acceso
          de la información para generar debate.
        </p>
        <button
          onClick={() => {
            router.push("/collaborate");
          }}
          className="hidden"
          data-scroll
          data-scroll-class="appear"
        >
          Colaborar
        </button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & section {
    width: 94%;
    max-width: 1040px;
    margin: auto;
    margin-bottom: 0;
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  & p {
    width: 88%;
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 36px !important;
  }
  & button {
    font-size: 20px;
    letter-spacing: 4px;
    font-family: Montserrat;
    padding: 16px 32px;
    border-radius: 32px;
    transition: ease 0.5s;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.main};
  }
  & button:hover {
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme.main};
  }
  & p span {
    font-size: 2rem;
    letter-spacing: 3px;
  }
  @media (max-width: 680px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 40px;
  font-weight: 200;
  @media (max-width: 680px) {
    font-size: 30px;
  }
`;
