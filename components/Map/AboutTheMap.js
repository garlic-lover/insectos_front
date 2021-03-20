import styled from "styled-components";

export default function AboutTheMap({ t }) {
  return (
    <Wrapper>
      <h2>{t("aboutTheMap")}</h2>
      <p>{t("underConstruct")}</p>
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
