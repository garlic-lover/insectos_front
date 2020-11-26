import { animated, interpolate } from "react-spring";

import styled from "styled-components";

import { trans } from "./positionFunctions";

export default function SimpleCard({
  i,
  isTop,
  title,
  subTitle,
  color,
  style,
  bind,
}) {
  const { x, y, rot, scale } = style;

  return (
    <Wrapper
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <Card
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
        color={color}
        isontop={isTop ? "true" : "false"}
      >
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled(animated.div)`
  position: absolute;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
`;

const Card = styled(animated.div)`
  will-change: transform;
  height: 300px;
  width: 220px;
  border-radius: 14px;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: ${(props) =>
    props.isontop === "true"
      ? "0 12.5px 100px -10px rgba(50, 50, 73, 0.4),0 10px 10px -10px rgba(50, 50, 73, 0.3)"
      : ""};
  padding: 20px;
  & h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  & p {
    line-height: 1.5rem;
    text-align: center;
  }
`;
