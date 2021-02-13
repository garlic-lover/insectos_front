import styled from "styled-components";

import dynamic from "next/dynamic";

const TypeForm = dynamic(() => import("../components/Collaborate/Typeform"), {
  ssr: false,
});

export default function Collaborate() {
  return (
    <Wrapper>
      <h2>¿Interesado-a por el proyecto ? </h2>
      <SubTitle>
        Quizás puedas unirte a nosotros, ¡Todes son bienvenidos!
      </SubTitle>
      <Row>
        <div>
          <h3>Contribuciones bienvenidas</h3>
          <ul>
            <li>
              <h4>Biólogos(as)</h4>
              <p>Temas de interés : entomología, ethnobiologia</p>
            </li>
            <li>
              <h4>Programadores</h4>
              <p>
                Si te gusta el open source <span className="lnr lnr-laptop" />
              </p>
            </li>
            <li>
              <h4>Diseñadores</h4>
              <p>
                Plasma tu creatividad sobre temas innovadores y socialmente
                responsables.
              </p>
            </li>
            <li>
              <h4>Apasionados(as)</h4>
              <p>
                Si los temas que tratamos te interesan y piensas que podrías
                aportar tus habilidades o talentos, no dudes en contactarnos 🦋
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Cómo podrías ayudar</h3>
          <ul>
            <li>
              <h4>Crear contenido</h4>
              <p>
                Queremos que nuestro trabajo llegue al mayor público posible.
                Por eso, producimos diseños, infografías, videos...
              </p>
            </li>
            <li>
              <h4>Escribir articulos de opinión</h4>
              <p>
                Redactamos artículos de divulgación dirigidos al público en
                general.
              </p>
            </li>
            <li>
              <h4>Participar en la página web</h4>
              <p>Entre el código y el diseño, hay mucho por hacer 🤓 </p>
            </li>
            <li>
              <h4>Comunicación</h4>
              <p>
                Deseaomos construir y ampliar nuestra red para transimitir
                nuestra pasión 🐛
              </p>
            </li>
          </ul>
        </div>
      </Row>
      <TypeformWrapper>
        <TypeForm />
      </TypeformWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  text-align: center;
  margin-top: 70px;
  & h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  @media (max-width: 680px) {
    margin-top: 70px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 50px;
  font-family: Montserrat;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  & div {
  }
  & h3 {
    margin-bottom: 32px;
    font-size: 24px;
  }
  & ul {
    text-align: left;
  }
  & li {
    margin-bottom: 20px;
    font-size: 16px;
    margin-bottom: 32px;
  }
  & h4 {
    margin-bottom: 12px;
    font-size: 18px;
  }
  & p {
    line-height: 24px;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
  }
`;

const TypeformWrapper = styled.div`
  width: 94%;
  max-width: 600px;
  margin: auto;
  margin-top: 40px;
  height: 550px;
  margin-bottom: 30px;
`;
