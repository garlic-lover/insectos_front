import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

import useTranslate from "../../hooks/useTranslate";

import LanguageSwitch from "./LanguageSwitch";
import Hamburger from "./Hamburger";

export default function Header() {
  const [isOpened, isOpenedChange] = useState(false);
  const { t } = useTranslate();
  const router = useRouter();

  return (
    <Container>
      <section>
        <Link href="/">
          <h1>INSECTIVORA</h1>
        </Link>
        <Hamburger isOpened={isOpened} isOpenedChange={isOpenedChange} />
        <Menu>
          <Link href="/map">
            <MenuItem isSelected={router.pathname === "/map"}>
              {t("map")}
            </MenuItem>
          </Link>
          <Link href="/facts">
            <MenuItem isSelected={router.pathname === "/facts"}>
              {t("facts")}
            </MenuItem>
          </Link>
          <Link href="/collaborate">
            <MenuItem isSelected={router.pathname === "/collaborate"}>
              {t("collaborate")}
            </MenuItem>
          </Link>
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
  @media (max-width: 680px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  transition: 0.4s;
  text-decoration: underline;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: solid 2.5px
    ${(props) => (props.isSelected ? props.theme.main : props.theme.background)};
`;
