import styled from "styled-components";
import { useRouter } from "next/router";

export default function SecondBloc({ t }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Main>
        <Title>{t("landing").ourObjectives}</Title>
        <Grid>
          <div>
            <h4>
              <img src="/svg/lamp.svg" />
              {t("landing").vulgarisation}
            </h4>
          </div>
          <div>
            <h4>
              <span className="lnr lnr-leaf" />
              {t("landing").citizen}
            </h4>
          </div>
          <div>
            <h4>
              <span className="lnr lnr-chart-bars" />
              {t("landing").freeInfo}
            </h4>
          </div>
        </Grid>
        <Title>{t("landing").vision}</Title>
        <SubTitle>
          {t("landing").vision1} <br />
          {t("landing").vision2}
        </SubTitle>
        <button
          onClick={() => {
            router.push("/colaborar");
          }}
          className="hidden"
          data-scroll
          data-scroll-class="appear"
        >
          {t("collaborate")}
        </button>
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
  padding-bottom: 40px;
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
  @media (max-width: 680px) {
    padding-top: 20px;
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
    line-height: 36px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  @media (max-width: 680px) {
    font-size: 16px;
    width: 80%;
    margin: auto;
    margin-bottom: 40px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8px;
  margin-top: 40px;
  margin-bottom: 60px;
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
    margin-bottom: 20px;
    & h4 {
      font-size: 20px;
      line-height: 36px;
      width: 80%;
      margin: auto;
    }
  }
`;
