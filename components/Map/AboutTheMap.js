import styled from "styled-components";

export default function AboutTheMap() {
  return (
    <Wrapper>
      <h2>Sobre el mapa</h2>
      <p>
        Aliquip fugiat consequat do cupidatat sint. Non cupidatat consequat
        culpa dolor nostrud quis in enim deserunt nostrud veniam Lorem. Est
        fugiat elit velit sunt. Sint qui velit nulla ea cupidatat.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & h2 {
    font-size: 2rem;
    margin-bottom: 32px;
  }
  & p {
    font-size: 16px;
    line-height: 28px;
  }
`;
