import styled from "styled-components";
import Link from "next/link";

import useTranslate from "../../hooks/useTranslate";

import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const { t } = useTranslate();

  return (
    <Container>
      <section>
        <Link href="/">
          <h1>INSECTIVORA</h1>
        </Link>
        <Menu>
          <Link href="/map">{t("map")}</Link>
          <Link href="/facts">{t("facts")}</Link>
          <Link href="/collaborate">{t("collaborate")}</Link>
          <LanguageSwitch />
        </Menu>
      </section>
    </Container>
  );
}

const Container = styled.header`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  & section {
    position: relative;
    width: 94%;
    max-width: 1040px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & h1 {
    position: absolute;
    left: 0;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  & a {
    color: inherit;
    text-decoration: inherit;
    margin-left: 12px;
    font-size: 18px;
  }
  & a:first:child {
    margin-left: 0;
  }
`;
