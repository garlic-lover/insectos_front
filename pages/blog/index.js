import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import Loader from "../../components/DS/Loader";

import useTranslate from "@hooks/useTranslate";

import { useQuery } from "@apollo/client";
import BLOG_ARTICLES from "@GraphQl/Queries/BLOG_ARTICLES";

export default function Blog() {
  const { t } = useTranslate();
  const { data } = useQuery(BLOG_ARTICLES);
  /* More code */
  const router = useRouter();

  if (!data) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>Blog</h2>
      {data.blogArticles.length === 0 && <p>{t("blogSoon")}</p>}
      <ul>
        {data.blogArticles.map(
          ({ title, shortDescription, authorName }, index) => {
            return (
              <Article
                key={index}
                onClick={() => {
                  router.push(`/blog/${title}`);
                }}
              >
                <h3>{title}</h3>
                <p>{shortDescription}</p>
              </Article>
            );
          }
        )}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  min-height: 650px;
  margin-top: 50px;
  & h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 80px;
  }
  & ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 14px;
    margin-bottom: 48px;
  }
  @media (max-width: 1000px) {
    & ul {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
    }
  }
  @media (max-width: 680px) {
    margin-top: 40px;
    & h2 {
      margin-bottom: 40px;
    }
    & ul {
      grid-template-columns: 1fr;
    }
  }
`;

const Article = styled.li`
  padding: 24px 36px;
  box-shadow: 0 8px 24px rgba(163, 86, 57, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: ease 0.3s;
  & h3 {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 28px;
    transition: ease 0.3s;
  }
  & p {
    line-height: 28px;
    transition: ease 0.3s;
  }
  &:hover {
    box-shadow: 0 8px 48px rgba(163, 86, 57, 0.25);
  }
  &:hover h3 {
  }
  @media (max-width: 680px) {
    & h3 {
      text-align: center;
      margin-bottom: 24px;
    }
    & p {
    }
  }
`;
