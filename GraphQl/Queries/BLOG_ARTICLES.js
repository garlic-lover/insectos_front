import { gql } from "@apollo/client";

const BLOG_ARTICLES = gql`
  query blogArticles {
    blogArticles {
      _id
      title
      shortDescription
      authorName
      lang
    }
  }
`;

export default BLOG_ARTICLES;
