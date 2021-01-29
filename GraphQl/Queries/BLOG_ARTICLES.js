import { gql } from "@apollo/client";

const BLOG_ARTICLES = gql`
  query blogArticles {
    blogArticles {
      _id
      title
      shortDescription
      authorName
      lang
      data {
        blocks {
          type
          data {
            level
            text
            items
            style
          }
        }
        version
        time
      }
    }
  }
`;

export default BLOG_ARTICLES;
