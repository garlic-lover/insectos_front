import { gql } from "@apollo/client";

const BLOG_ARTICLE_ADD = gql`
  mutation blogArticleAdd($blogArticle: BlogArticleInput!) {
    blogArticleAdd(blogArticle: $blogArticle)
  }
`;

export default BLOG_ARTICLE_ADD;
