import styled from "styled-components";

export default function ThirdBloc() {
  return (
    <Wrapper id="about">
      <section>
        <Title className="hidden" data-scroll data-scroll-class="appear">
          ¿Quiénes somos ?
        </Title>
        <p className="hidden" data-scroll data-scroll-class="appear">
          <span>Insectívora</span> es producto de un equipo multidisciplinario
          apasionado por la entomología y los insectos comestibles.
          <br />
          Nuestros esfuerzos están enfocados en gestar un medio que ahonde en la
          entomofagia, que recopile, genere y difunda esta información con
          integridad moral y un enfoque sustentable.
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 50px;
  & section {
    width: 94%;
    max-width: 1040px;
    margin: auto;

    text-align: center;
    padding-top: 60px;
  }
  & p {
    width: 88%;
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 36px !important;
    text-align: left;
  }

  & p span {
    font-size: 2rem;
    letter-spacing: 3px;
  }
  @media (max-width: 680px) {
    margin-bottom: 0px;
    padding-top: 30px;
    padding-bottom: 0px;
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
