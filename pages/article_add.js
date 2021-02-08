import styled from "styled-components";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/ArticleAdd/Editor"), {
  ssr: false,
});

export default function ArticleAdd() {
  return (
    <Wrapper>
      <Title>Nuevo articulo</Title>
      <Editor />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  margin-top: 40px;
  min-height: 500px;
  @media (max-width: 680px) {
    margin-top: 40px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 48px;
`;
