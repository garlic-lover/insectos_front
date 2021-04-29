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
      <Container>
        <section>
          <Link href="/">
            <SmallTitle>
              <span className="lnr lnr-dinner" />
              INSECTIVORA
              <span className="lnr lnr-bug" />
            </SmallTitle>
          </Link>
          <Menu>
            <Link href="/">
              <h1>
                <span className="lnr lnr-dinner" />
                INSECTIVORA
                <span className="lnr lnr-bug" />
              </h1>
            </Link>
            <Link href="/mapa">
              <MenuItem isSelected={router.pathname === "/mapa"}>
                {t("map")}
              </MenuItem>
            </Link>
            <Link href="/db">
              <MenuItem isSelected={router.pathname === "/db"}>
                {t("db")}
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
          </Menu>
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
            <button onClick={() => alert("Disponible pronto...")}>
              {t("proposeAnInsect")}
            </button>
            <button onClick={() => router.push("/colaborar")}>
              {t("joinTheProject")}
            </button>
            {/*  <Link href="/colaborar">
              <MenuItem isSelected={router.pathname === "/colaborar"}>
                {t("collaborate")}
              </MenuItem>
            </Link> */}
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
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.background};
  box-shadow: 0 2px 2px rgb(0 0 0 / 20%);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 8;
  position: fixed;
  top: 0;
  width: 100%;
  & section {
    position: relative;
    padding: 0 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & h1 {
    font-size: 1.6rem;
    cursor: pointer;
    letter-spacing: 2px;
    font-weight: 200;
    margin: 0;
    & span {
      display: inline-block;
      width: 50px;
      text-align: center;
    }
    margin-left: -10px;
  }
  @media (max-width: 1096px) {
    box-shadow: 0 8px 24px rgba(163, 86, 57, 0.1);
    width: 100%;
    & section {
      padding: 0 6px;
    }
  }
`;

const SmallTitle = styled.h1`
  font-size: 1.5rem !important;
  letter-spacing: 2px;
  @media (max-width: 340px) {
    font-size: 1.3rem !important;
  }
  @media (min-width: 1096px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.background};
  & a {
    color: inherit;
    text-decoration: inherit;
    margin-left: 12px;
    font-size: 17px;
    letter-spacing: 1px;
  }
  & a:first:child {
    margin-left: 0;
  }
  & button {
    border: solid 1px;
    border-radius: 4px;
    padding: 6px 16px;
    margin-left: 12px;
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme.main};
    font-size: 16px;
    transition: ease 0.35s;
  }
  & button:hover {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.main};
  }
  & button:active {
    transform: translateY(1px);
  }
  @media (max-width: 1096px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  transition: 0.3s;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 2px;
  padding-bottom: 2px;
  border-bottom: solid 2px
    ${(props) => (props.isSelected ? props.theme.background : props.theme.main)};
  &:hover {
    border-bottom: solid 2px ${(props) => props.theme.background};
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
