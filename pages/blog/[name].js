import styled from "styled-components";

import dynamic from "next/dynamic";

const Article = dynamic(() => import("../../components/Blog/Article"), {
  ssr: false,
});

import request from "@GraphQl/requestWithoutApollo";
import BLOG_ARTICLE from "@GraphQl/Queries/BLOG_ARTICLE";

export default function BlogArticle({ article }) {
  if (!article) {
    return <Wrapper>Loading ...</Wrapper>;
  }
  if (!article.title) {
    return <Wrapper>Articulo no encontrado</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>{article.title}</Title>
      <Article data={article.data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  min-height: 550px;
  margin-top: 50px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 200;
`;

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "first-article" } }],
    fallback: true,
  };
}

export async function getStaticProps(params) {
  // Use the url in the name to get the JSON from AWS

  const variables = {
    name: params.params.name,
  };

  // First, get the chariot data
  let res = await request(BLOG_ARTICLE, variables);

  if (!res.blogArticle) {
    return { props: { article: {} } };
  }

  return {
    props: { article: res.blogArticle },
  };
}
