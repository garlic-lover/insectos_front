import Link from "next/link";
import styled from "styled-components";

import LanguageSwitch from "./LanguageSwitch";

export default function ResponsiveMenu({ isOpened, close, router, t }) {
  return (
    <Wrapper isOpened={isOpened}>
      <Menu>
        <Link href="/mapa">
          <MenuItem
            onClick={() => {
              close();
            }}
            isSelected={router.pathname === "/mapa"}
          >
            {t("map")}
          </MenuItem>
        </Link>
        <Link href="/db">
          <MenuItem
            onClick={() => {
              close();
            }}
            isSelected={router.pathname === "/db"}
          >
            {t("db")}
          </MenuItem>
        </Link>
        <Link href="/facts">
          <MenuItem
            onClick={() => {
              close();
            }}
            isSelected={router.pathname === "/facts"}
          >
            {t("facts")}
          </MenuItem>
        </Link>
        <Link href="/colaborar">
          <MenuItem
            onClick={() => {
              close();
            }}
            isSelected={router.pathname === "/colaborar"}
          >
            {t("collaborate")}
          </MenuItem>
        </Link>
        <LanguageSwitch />
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  transition: ease 0.7s;
  position: fixed;
  width: 80%;
  height: 100vh;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.background};
  top: 0;
  right: 0px;
  transform: translateX(${(props) => (!props.isOpened ? "100%" : "0")});
  z-index: 10;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  margin-left: 24px;
`;

const MenuItem = styled.a`
  font-size: 20px;
  margin-bottom: 32px;
`;
