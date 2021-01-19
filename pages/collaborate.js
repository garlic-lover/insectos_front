import styled from "styled-components";

import dynamic from "next/dynamic";

const TypeForm = dynamic(() => import("../components/Collaborate/Typeform"), {
  ssr: false,
});

import useRefreshScroll from "@hooks/useRefreshScroll";

export default function Collaborate() {
  useRefreshScroll();

  return (
    <Wrapper>
      <h2>Interested by the project ? </h2>
      <SubTitle>Maybe you can join us, everybody is welcome!</SubTitle>
      <Row>
        <div>
          <h3>Welcomed contributions</h3>
          <ul>
            <li>
              <h4>Biologists</h4>
              <p>
                Quis et sint enim labore ut irure elit sit sit incididunt. Quis
                et cupidatat nisi et excepteur veniam nisi cillum nisi mollit.
                Culpa mollit laboris proident anim id.
              </p>
            </li>
            <li>
              <h4>Developpers</h4>
              <p>
                Quis et sint enim labore ut irure elit sit sit incididunt. Quis
                et cupidatat nisi et excepteur veniam nisi cillum nisi mollit.
                Culpa mollit laboris proident anim id.
              </p>
            </li>
            <li>
              <h4>Anthropologists</h4>
              <p>
                Quis et sint enim labore ut irure elit sit sit incididunt. Quis
                et cupidatat nisi et excepteur veniam nisi cillum nisi mollit.
                Culpa mollit laboris proident anim id.
              </p>
            </li>
            <li>
              <h4>Designers</h4>
              <p>
                Quis et sint enim labore ut irure elit sit sit incididunt. Quis
                et cupidatat nisi et excepteur veniam nisi cillum nisi mollit.
                Culpa mollit laboris proident anim id.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3>How you could help</h3>
          <ul>
            <li>
              <h4>Biologists</h4>
              <p>
                Quis et sint enim labore ut irure elit sit sit incididunt. Quis
                et cupidatat nisi et excepteur veniam nisi cillum nisi mollit.
                Culpa mollit laboris proident anim id.
              </p>
            </li>
            <li>
              <h4>Biologists</h4>
              <p>
                Quis et sint enim labore ut irure elit sit sit incididunt. Quis
                et cupidatat nisi et excepteur veniam nisi cillum nisi mollit.
                Culpa mollit laboris proident anim id.
              </p>
            </li>
            <li>
              <h4>Biologists</h4>
              <p>
                Quis et sint enim labore ut irure elit sit sit incididunt. Quis
                et cupidatat nisi et excepteur veniam nisi cillum nisi mollit.
                Culpa mollit laboris proident anim id.
              </p>
            </li>
            <li>
              <h4>Biologists</h4>
              <p>
                Quis et sint enim labore ut irure elit sit sit incididunt. Quis
                et cupidatat nisi et excepteur veniam nisi cillum nisi mollit.
                Culpa mollit laboris proident anim id.
              </p>
            </li>
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
  & h2 {
    font-size: 2rem;
    margin-bottom: 24px;
  }
  @media (max-width: 680px) {
    margin-top: 70px;
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
  margin-bottom: 50px;
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
