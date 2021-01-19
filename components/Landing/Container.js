import styled from "styled-components";
// import LocomotiveScroll from "locomotive-scroll";

import FirstBloc from "./FirstBloc";
import SecondBloc from "./SecondBloc";
import ThirdBloc from "./ThirdBloc";

import useRefreshScroll from "@hooks/useRefreshScroll";

export default function Container({ t }) {
  useRefreshScroll();

  return (
    <Wrapper>
      <FirstBloc t={t} />
      <SecondBloc t={t} />
      <ThirdBloc t={t} />
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
  margin-bottom: 60px;
`;
