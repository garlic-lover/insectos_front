import { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";

import FirstBloc from "./FirstBloc";
import SecondBloc from "./SecondBloc";
import ThirdBloc from "./ThirdBloc";

import useRefreshScroll from "@hooks/useRefreshScroll";
import useWindowSize from "@hooks/useWindowSize";
import useAppContext from "@hooks/useAppContext";

export default function Container({ t }) {
  useRefreshScroll();
  const { width } = useWindowSize();

  const quizRef = useRef();

  const {
    state: { theScroll },
  } = useAppContext();

  const quizz = document.getElementById("quizzContainer");

  function scrollToQuiz() {
    theScroll.scrollTo(quizz, { offset: -90, duration: 500 });
  }

  return (
    <Wrapper data-scroll-container id="cont">
      <Chapulines
        data-scroll
        data-scroll-sticky
        data-scroll-target="#cont"
        isMobile={width < 680}
      >
        <Image
          layout="fill"
          priority={true}
          src="/images/chapulines.jpg"
          alt="chapulines en el mercado"
        />
      </Chapulines>
      <Title data-scroll data-scroll-speed="-5">
        <section>
          <div>
            <span className="lnr lnr-bug" />
          </div>
          <h2>{t("homeTitle")} </h2>
          <div>
            <span className="lnr lnr-bug" />
          </div>
        </section>
        <SubTitle
          onClick={() => {
            scrollToQuiz();
          }}
        >
          Testez votre connaissance{" "}
          <span className="lnr lnr-chevron-down-circle" />
        </SubTitle>
      </Title>

      <BlocsWrapper>
        <FirstBloc t={t} quizRef={quizRef} />
        <SecondBloc t={t} />
        <ThirdBloc t={t} />
      </BlocsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & p {
    line-height: 2rem;
  }
  & a {
    text-decoration: inherit;
    color: inherit;
    background-color: lightGrey;
    padding: 6px 12px;
    border-radius: 50px;
    font-size: 12px;
  }
`;

const BlocsWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const Chapulines = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  //background-image: url("/images/chapulines.jpg");
  //background-size: cover;
  //background-opacity: 0.5;
  position: relative;
  padding-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => (props.isMobile ? "1" : "-1")};
  & h2 {
    margin-top: -90px;
    z-index: 10;
    font-size: 2rem;
  }
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
    object-fit: cover;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 50vh;
  transform: translateY(-50%);
  font-size: 3rem;
  font-weight: 200;
  width: 100%;
  text-align: center;
  z-index: 3;
  text-shadow: 0 8px 24px rgba(163, 86, 57, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    //border-top: solid 2px;
    //border-bottom: solid 2px;
    // padding: 40px 0;
  }
  & section {
    display: flex;
    justify-content: center;
  }
  & div {
    position: relative;
    width: 50px;
    height: 50px;
  }
  & div:first-child {
    margin-right: 12px;
  }
  & div:last-child {
    margin-left: 12px;
  }
  & div:first-child span {
    position: absolute;
    left: 0;
    transform: rotate(90deg);
  }
  & div:last-child span {
    position: absolute;
    left: 0;
    transform: rotate(-90deg);
  }
  @media (max-width: 680px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
    left: 50%;
    transform: translate(-50%, -50%);
    & section {
      align-items: center;
      width: 90%;
      margin: auto;
    }
    & section div {
      display: flex;
      align-items: center;
    }
    & section span {
      font-size: 2rem;
    }
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: ease 0.2s;
  & span {
    margin-left: 12px;
  }
  &:hover {
    transform: translateY(1px);
    font-size: 1.25rem;
  }
`;
