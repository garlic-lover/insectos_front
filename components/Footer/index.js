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
          <p>insectivora_facts</p>
          <span className="icon-instagram" />
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
  background-color: #a38c38;
  color: white;
`;

const SocialNetworks = styled.div`
  position: absolute;
  bottom: 12px;
  right: 24px;
  width: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & p {
    color: white;
    font-size: 18px;
    margin-right: 6px;
  }
  & a {
    text-decoration: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  & span {
    font-size: 36px;
    color: white;
    border: none;
  }
`;
