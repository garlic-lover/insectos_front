import styled from "styled-components";

import dynamic from "next/dynamic";

const TypeForm = dynamic(() => import("../components/Collaborate/Typeform"), {
  ssr: false,
});

import useTranslate from "@hooks/useTranslate";

export default function Collaborate() {
  const { t } = useTranslate();

  return (
    <Wrapper>
      <h2>{t("interestedByTheProject")} </h2>
      <SubTitle>{t("maybeYouCanJoin")}</SubTitle>
      <Row>
        <div>
          <h3>{t("welcomedContributions")}</h3>
          <ul>
            <li>
              <h4>{t("welcomed1").title}</h4>
              <p>{t("welcomed1").descr}</p>
            </li>
            <li>
              <h4>{t("welcomed2").title}</h4>
              <p>
                {t("welcomed2").descr} <span className="lnr lnr-laptop" />
              </p>
            </li>
            <li>
              <h4>{t("welcomed3").title}</h4>
              <p>{t("welcomed3").descr}</p>
            </li>
            <li>
              <h4>{t("welcomed4").title}</h4>
              <p>{t("welcomed4").descr} 🦋</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>{t("howYouCanHelp")}</h3>
          <ul>
            {t("howYouCanHelpContent").map(({ title, descr }) => {
              return (
                <li key={title}>
                  <h4>{title}</h4>
                  <p>{descr}</p>
                </li>
              );
            })}
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
