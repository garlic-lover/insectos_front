import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <p>Contact : insectivora@outlook.es</p>
      <SocialNetworks>
        <a
          href="https://www.instagram.com/insectivora_facts/?hl=es"
          target="_blank"
        >
          <span className="icon-instagram" />
        </a>
        <a
          href="https://www.instagram.com/insectivora_facts/?hl=es"
          target="_blank"
        >
          <span className="icon-facebook2" />
        </a>
      </SocialNetworks>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.main};
  color: white;
  background-color: #a38c38;
`;

const SocialNetworks = styled.div`
  position: absolute;
  bottom: 12px;
  right: 24px;
  width: 48px;
  display: flex;
  justify-content: space-between;
  & a {
    text-decoration: inherit;
  }
  & span {
    font-size: 20px;
    color: ${(props) => props.theme.main};
    border: none;
  }
`;
