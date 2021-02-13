import styled from "styled-components";

export default function SecondBloc({ t }) {
  return (
    <Wrapper id="about">
      <Main>
        <Title className="hidden" data-scroll data-scroll-class="appear">
          Visión
        </Title>
        <SubTitle className="hidden" data-scroll data-scroll-class="appear">
          Creemos que la información científica debe ser de libre y fácil acceso
          para así generar espacios de debate. Para ello, la participación de la
          sociedad es importante para generar conocimiento
        </SubTitle>
        <Title className="hidden" data-scroll data-scroll-class="appear">
          Nuestros objectivos
        </Title>
        <Grid>
          <div className="hidden" data-scroll data-scroll-class="appear">
            <h4>
              <img src="/svg/lamp.svg" />
              Divulgación científica
            </h4>
          </div>
          <div className="hidden" data-scroll data-scroll-class="appear">
            <h4>
              <span className="lnr lnr-leaf" />
              Ciencia ciudadana
            </h4>
          </div>
          <div className="hidden" data-scroll data-scroll-class="appear">
            <h4>
              <span className="lnr lnr-chart-bars" />
              Aceso a la información
            </h4>
          </div>
        </Grid>
      </Main>
    </Wrapper>
  );
}

//  leaf
// book

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 00px;
  @media (max-width: 680px) {
    padding-top: 50px;
    padding-bottom: 30px;
  }
`;

const Main = styled.div`
  width: 94%;
  max-width: 1040px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 200;
  margin-bottom: 24px;
  color: ${(props) => ""};
  text-align: center;
  @media (max-width: 680px) {
    font-size: 30px;
    margin-bottom: 12px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  width: 85%;
  margin: auto;
  margin-bottom: 90px;
  @media (max-width: 680px) {
    font-size: 16px;
    width: 80%;
    margin: auto;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8px;
  & div {
    padding: 30px;
  }
  & h4 {
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
  }
  & p {
    line-height: 12px;
    font-size: 15px;
    text-align: left;
  }
  & img {
    height: 32px;
    filter: invert(35%) sepia(58%) saturate(575%) hue-rotate(331deg)
      brightness(95%) contrast(87%);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
