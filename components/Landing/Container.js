import styled from "styled-components";
// import LocomotiveScroll from "locomotive-scroll";

import FirstBloc from "./FirstBloc";
import SecondBloc from "./SecondBloc";
import ThirdBloc from "./ThirdBloc";

import useRefreshScroll from "@hooks/useRefreshScroll";

export default function Container({ t }) {
  useRefreshScroll();

  return (
    <Wrapper id="cont">
      <Chapulines
        data-scroll
        data-scroll-sticky
        data-scroll-target="#cont"
      ></Chapulines>
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
  background-image: url("/images/chapulines.jpg");
  background-size: cover;
  background-opacity: 0.5;
  opacity: 0.5;
  position: relative;
  z-index: -1;
  padding-top: 90px;
`;
