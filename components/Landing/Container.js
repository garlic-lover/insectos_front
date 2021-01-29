import Image from "next/image";
import styled from "styled-components";

import FirstBloc from "./FirstBloc";
import SecondBloc from "./SecondBloc";
import ThirdBloc from "./ThirdBloc";

import useRefreshScroll from "@hooks/useRefreshScroll";
import useWindowSize from "@hooks/useWindowSize";

export default function Container({ t }) {
  useRefreshScroll();
  const { width } = useWindowSize();

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
          src="/images/chapulines.jpg"
          alt="chapulines en el mercado"
        />
      </Chapulines>
      <Title data-scroll data-scroll-speed="-5">
        <div>
          <span className="lnr lnr-bug" />
        </div>
        <h2>{t("homeTitle")} </h2>
        <div>
          <span className="lnr lnr-bug" />
        </div>
      </Title>
      <BlocsWrapper>
        <FirstBloc t={t} />
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
  justify-content: center;
  align-items: center;
  & h2 {
    //border-top: solid 2px;
    //border-bottom: solid 2px;
    // padding: 40px 0;
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
    font-size: 2.2rem;
    line-height: 3rem;
    width: 90%;
    margin: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
