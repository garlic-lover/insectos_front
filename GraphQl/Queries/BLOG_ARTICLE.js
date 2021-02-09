const BLOG_ARTICLE = `
  query blogArticle($name: String) {
    blogArticle(name: $name) {
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
            file{
              url
            }
            caption
            withBorder
            withBackground
            stretched
          }
        }
        version
        time
      }
    }
  }
`;

export default BLOG_ARTICLE;
