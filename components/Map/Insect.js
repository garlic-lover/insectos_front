import { useState } from "react";

import styled from "styled-components";

function Opened({ order, family }) {
  return (
    <OpenedWrapper>
      <p>
        <span>Orden</span> : {order.main} {order.sub && `(${order.sub})`}
      </p>
      <p>
        <span>Familia</span> : {family}
      </p>
    </OpenedWrapper>
  );
}

export default function Insect({
  insect: { order, family, specie, genus, commonNames },
}) {
  const [opened, openedChange] = useState(false);
  return (
    <Wrapper
      onClick={() => {
        openedChange(!opened);
      }}
    >
      <Name>
        <span>
          {genus} {specie}
        </span>{" "}
        ({commonNames})
      </Name>
      <Icon src="/svg/arrow-down.svg" isFlipped={opened} />
      {opened && <Opened order={order} family={family} />}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px;
  margin-bottom: 8px;
  width: calc(100% - 18px);
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
  }
  //display: none;
`;

const Name = styled.div`
  font-size: 14px;
  & span {
    font-style: italic;
    font-size: 16px;
  }
`;

const Icon = styled.img`
  filter: brightness(0) saturate(100%) invert(33%) sepia(69%) saturate(473%)
    hue-rotate(332deg) brightness(100%) contrast(88%);
  height: 12px;
  position: absolute;
  right: 6px;
  bottom: 6px;
  transition: ease-in-out 0.4s;
  transform: ${(props) =>
    props.isFlipped ? "rotate(180deg)" : "rotate(0deg)"};
`;

const OpenedWrapper = styled.div`
  font-size: 16px;
  padding-top: 16px;
  & p:first-child {
    margin-bottom: 12px;
  }
  & p span {
    border-bottom: solid 1px;
  }
`;
