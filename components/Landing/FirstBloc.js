import styled from "styled-components";

export default function FirstBloc({ t }) {
  return (
    <Wrapper>
      <div>
        <p>Et si </p>
        <h2>{t("homeTitle")}</h2>
        <p>
          Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro Dieter
          Weiss ist Garant für den Er­folg Ihrer Projekte.
        </p>
        <button>En savoir plus</button>
      </div>
      <Chapulines src="/images/chapulines.jpg" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
  height: 400px;
  margin-bottom  100px;
  margin-top : 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    width: 38%;
  }
  & p {
  //   color: ${(props) => props.theme.color2};
    margin-bottom: 6px;
    opacity: 0.7;
  }
  & h2 {
    font-size: 1.8rem;
    margin-bottom: 24px;
  }
  & button {
    margin-top: 12px;
  }
`;

const Chapulines = styled.img`
  width: auto;
  max-width: 55%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
`;
