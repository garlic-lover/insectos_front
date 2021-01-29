import { useRouter } from "next/router";
import styled from "styled-components";

export default function ThirdBloc() {
  const router = useRouter();

  return (
    <Wrapper>
      <Title>Quien somos ?</Title>
      <p>
        Aliquip fugiat consequat do cupidatat sint. Non cupidatat consequat
        culpa dolor nostrud quis in enim deserunt nostrud veniam Lorem. Est
        fugiat elit velit sunt. Sint qui velit nulla ea cupidatat.
      </p>
      <button
        onClick={() => {
          router.push("/collaborate");
        }}
      >
        Want to join ?
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
  & p {
    width: 80%;
    margin-bottom: 40px;
  }
  @media (max-width: 680px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 40px;
  font-weight: 200;
  @media (max-width: 680px) {
    font-size: 30px;
  }
`;
