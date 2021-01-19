import styled from "styled-components";

export default function Hamburger({ isOpened, isOpenedChange }) {
  return (
    <MenuIcon
      onClick={() => {
        isOpenedChange(!isOpened);
      }}
    >
      <input type="checkbox" />
      <Line opened={isOpened} />
      <Line opened={isOpened} isSecond />
      <Line opened={isOpened} />
    </MenuIcon>
  );
}

const MenuIcon = styled.div`
  display: block;
  position: absolute;
  top: 2px;
  right: 3px;
  transform: translateY(-50%);
  z-index: 11;
  -webkit-user-select: none;
  user-select: none;
  & input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }
  @media (min-width: 680px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: ${(props) =>
    props.opened ? props.theme.background : props.theme.main};
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  transform: ${(props) =>
    props.opened && props.isSecond
      ? "rotate(0deg) scale(0.2, 0.2)"
      : props.opened && "rotate(45deg) translate(-2px, -1px)"};

  opacity: ${(props) => props.isSecond && props.opened && "0"};

  &:first-child {
    transform-origin: 0% 0%;
  }
  &:last-child {
    transform-origin: 0% 100%;
    transform: ${(props) =>
      props.opened && "rotate(-45deg) translate(0, -1px)"};
  }
`;
