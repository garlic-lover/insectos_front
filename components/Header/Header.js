import Link from "next/link";

import useTranslate from "../../hooks/useTranslate";

import styled from "styled-components";

export default function Header() {
  const { t, lang, languageSwitch } = useTranslate();
  return (
    <Container>
      <h1>INSECTIVORA</h1>
      <Menu>
        <Link href="/">{t("home")}</Link> <Link href="/map">{t("map")}</Link>
        <Link href="/facts">{t("facts")}</Link>
        <Link href="/database">Database</Link>
      </Menu>

      <select
        value={lang}
        onChange={(ev) => {
          languageSwitch(ev.target.value);
        }}
      >
        <option>es</option>
        <option>fr</option>
        <option>en</option>
      </select>
    </Container>
  );
}

const Container = styled.header`
  height: 80px;
  box-shadow: 0 8px 16px hsla(30, 21%, 81%, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  & select {
    position: absolute;
    right: 1rem;
  }
`;

const Menu = styled.div`
  position: absolute;
  left: 1rem;
  & a {
    color: inherit;
    text-decoration: inherit;
    margin-left: 12px;
  }
  & a:first:child {
    margin-left: 0;
  }
`;
