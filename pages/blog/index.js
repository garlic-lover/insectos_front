import styled from "styled-components";

// Use the editor in read-only mode to display the articles

export default function Blog() {
  return (
    <Wrapper>
      <h2>Blog</h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  min-height: 500px;
  & h2 {
    font-size: 2.5rem;
    text-align: center;
  }
`;
