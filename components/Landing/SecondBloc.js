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
      id="about"
      /*  id="stick"
      className="hiddenSlow"
      data-scroll
      data-scroll-class="appear" */
    >
      <Main>
        <Title
          className="hidden"
          data-scroll
          data-scroll-class="appear"
          /* data-scroll-sticky
          data-scroll-target="#stick" */
        >
          Insectivora, que es ?
        </Title>
        <SubTitle className="hidden" data-scroll data-scroll-class="appear">
          What are our objectives with the insectivora project
        </SubTitle>
        <Grid>
          <div className="hidden" data-scroll data-scroll-class="appear">
            <h4>Hey, idea 1</h4>
            <p>
              Laboris id eiusmod laboris ut nulla dolor ullamco labore non est
              ex. Laboris aliqua ex duis reprehenderit amet minim consectetur
              cupidatat veniam est. Eu qui ad commodo enim dolore enim anim
              pariatur proident enim ex quis eiusmod officia.
            </p>
          </div>
          <div className="hidden" data-scroll data-scroll-class="appear">
            <h4>Hey, idea 2</h4>
            <p>
              Laboris id eiusmod laboris ut nulla dolor ullamco labore non est
              ex. Laboris aliqua ex duis reprehenderit amet minim consectetur
              cupidatat veniam est. Eu qui ad commodo enim dolore enim anim
              pariatur proident enim ex quis eiusmod officia.
            </p>
          </div>
          <div className="hidden" data-scroll data-scroll-class="appear">
            <h4>Hey, idea 3</h4>
            <p>
              Laboris id eiusmod laboris ut nulla dolor ullamco labore non est
              ex. Laboris aliqua ex duis reprehenderit amet minim consectetur
              cupidatat veniam est. Eu qui ad commodo enim dolore enim anim
              pariatur proident enim ex quis eiusmod officia.
            </p>
          </div>
        </Grid>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 60px;
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
  margin-bottom: 6px;
  color: ${(props) => ""};
  text-align: center;
  @media (max-width: 680px) {
    font-size: 30px;
    margin-bottom: 12px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  @media (max-width: 680px) {
    font-size: 16px;
    width: 80%;
    margin: auto;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 14px;
  & div {
    padding: 30px;
  }
  & h4 {
    margin-bottom: 24px;
    font-size: 24px;
  }
  & p {
    line-height: 12px;
    font-size: 15px;
    text-align: left;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

{
  /*    <Menu className="hidden" data-scroll data-scroll-class="appear">
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
       */
}

{
  /*  {page === 0 ? <Objectives t={t} /> : <AboutUs />} */
}

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
