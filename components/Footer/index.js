import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <p>Contact : insectivora@outlook.es</p>
      <SocialNetworks>
        <a
          href="https://www.facebook.com/Insect%C3%ADvora-103282298481156"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon-facebook" />
        </a>
        <a
          href="https://www.instagram.com/insectivora_facts/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <p>insectivora_facts</p>
          <span className="icon-instagram" />
        </a>
      </SocialNetworks>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  padding-top: 40px;
  padding-bottom: 40px;
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
  left: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 0 12px;
  justify-content: space-between;
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
    font-size: 32px;
    color: white;
    border: none;
  }
`;
