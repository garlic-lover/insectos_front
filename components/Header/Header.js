import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

import useTranslate from "../../hooks/useTranslate";

import LanguageSwitch from "./LanguageSwitch";
import Hamburger from "./Hamburger";
import ResponsiveMenu from "./ResponsiveMenu";

import useAppContext from "@hooks/useAppContext";

export default function Header() {
  const { t } = useTranslate();
  const router = useRouter();

  const {
    state: { menuOpened },
    dispatch,
  } = useAppContext();

  return (
    <>
      <Container data-scroll data-scroll-sticky data-scroll-target="#stick">
        <section>
          <Link href="/">
            <h1>INSECTIVORA</h1>
          </Link>
          <Hamburger
            isOpened={menuOpened}
            isOpenedChange={(value) => {
              dispatch({ type: "menuOpenedChange", menuOpened: value });
            }}
          />
          <ResponsiveMenu
            isOpened={menuOpened}
            router={router}
            t={t}
            close={() => {
              dispatch({ type: "menuOpenedChange", menuOpened: false });
            }}
          />
          <Menu>
            <Link href="/mapa">
              <MenuItem isSelected={router.pathname === "/mapa"}>
                {t("map")}
              </MenuItem>
            </Link>
            <Link href="/facts">
              <MenuItem isSelected={router.pathname === "/facts"}>
                {t("facts")}
              </MenuItem>
            </Link>
            <Link href="/blog">
              <MenuItem isSelected={router.pathname === "/blog"}>Blog</MenuItem>
            </Link>
            <Link href="/colaborar">
              <MenuItem isSelected={router.pathname === "/colaborar"}>
                {t("collaborate")}
              </MenuItem>
            </Link>
            <LanguageSwitch />
          </Menu>
        </section>
        {menuOpened && (
          <Shadow
            onClick={() => {
              dispatch({ type: "menuOpenedChange", menuOpened: false });
            }}
          />
        )}
      </Container>
    </>
  );
}

const Container = styled.header`
  background-color: ${(props) => props.theme.background};
  // box-shadow: 0 8px 24px rgba(163, 86, 57, 0.1);
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 8;
  position: fixed;
  top: 0;
  width: 100%;
  & section {
    position: relative;
    width: 94%;
    max-width: 1240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & h1 {
    position: absolute;
    left: 0;
    font-size: 2rem;
    cursor: pointer;
    letter-spacing: 8px;
    font-weight: 200;
  }
  @media (max-width: 680px) {
    box-shadow: 0 8px 24px rgba(163, 86, 57, 0.1);
    width: 100%;
    background-color: ${(props) => props.theme.background};
    height: 70px;
    & h1 {
      font-size: 1.6rem;
      letter-spacing: 6px;
    }
  }
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  color: rgba(162, 140, 56, 1);
  & a {
    color: inherit;
    text-decoration: inherit;
    margin-left: 12px;
    font-size: 18px;
    letter-spacing: 4px;
  }
  & a:first:child {
    margin-left: 0;
  }
  @media (max-width: 680px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  transition: 0.3s;
  text-decoration: underline;
  cursor: pointer;
  padding-bottom: 4px;
  border-bottom: solid 2.5px
    ${(props) => (props.isSelected ? props.theme.main : props.theme.background)};
  &:hover {
    border-bottom: solid 2.5px ${(props) => props.theme.main};
  }
`;

const ShadowAppear = keyframes`
  from{
    background-color: rgba(0, 0, 0, 0);
  }
  to{
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 8;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${ShadowAppear} 0.7s;
`;
