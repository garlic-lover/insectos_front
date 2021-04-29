import styled from "styled-components";

export default function ThirdBloc({ t, aboutRef }) {
  return (
    <Wrapper ref={aboutRef} id="about">
      <section>
        <Title>{t("landing").whoAreWe}</Title>
        <p>
          <span>Insectívora</span> {t("landing").whoAreWe1}
          <br />
          {t("landing").whoAreWe2}
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
