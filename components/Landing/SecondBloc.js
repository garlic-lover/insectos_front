import { useState } from "react";
import styled from "styled-components";

function Objectives({ t }) {
  return (
    <>
      <p>The project is constructed between two complentary goals:</p>
      <ul>
        <li>Centralizacion de datos scientificos</li>
        <li>Vulgarizaction</li>
      </ul>
    </>
  );
}

function AboutUs() {
  return (
    <>
      <h4>Who we are ? </h4>
      <p>
        A transdisciplinary team, for now composed of students of biology,
        social sciences, and programmation.
      </p>
      <p>We all share the same will to communicate on this subject</p>
    </>
  );
}

export default function SecondBloc({ t }) {
  const [page, pageChange] = useState(0);

  return (
    <Wrapper
      id="stick"
      className="hiddenSlow"
      data-scroll
      data-scroll-class="appear"
    >
      <Main>
        <Title
          data-scroll
          data-scroll-class="appear"
          /* data-scroll-sticky
          data-scroll-target="#stick" */
        >
          The insectivora project
        </Title>
        <Menu className="hidden" data-scroll data-scroll-class="appear">
          <MenuItem
            selected={page === 0}
            onClick={() => {
              pageChange(0);
            }}
          >
            Objectives
          </MenuItem>
          <MenuItem
            selected={page === 1}
            onClick={() => {
              pageChange(1);
            }}
          >
            About us
          </MenuItem>
        </Menu>
        {page === 0 ? <Objectives t={t} /> : <AboutUs />}
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color2};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 120px;
  min-height: 400px;
`;

const Main = styled.div`
  width: 94%;
  max-width: 1040px;
  text-align: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const MenuItem = styled.h3`
  font-size: 1.3rem;
  cursor: pointer;
  text-decoration: ${(props) => props.selected && "underline"};
  &:first-child {
    margin-right: 12px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: ${(props) => ""};
  text-align: center;
`;
