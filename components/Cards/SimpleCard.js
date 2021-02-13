import { animated, interpolate } from "react-spring";

import styled from "styled-components";

import { trans } from "./positionFunctions";

export default function SimpleCard({
  i,
  isTop,
  title,
  subTitle,
  source,
  backColor,
  color,
  style,
  bind,
  t,
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
        color2={backColor}
        color={color}
        isontop={isTop ? "true" : "false"}
      >
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <Source title={source}>
          {t("source")} : {source}
        </Source>
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
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  will-change: transform;
  height: 300px;
  width: 220px;
  border-radius: 14px;
  background-color: ${(props) => props.color2};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  //align-items: center;
  box-shadow: ${(props) =>
    props.isontop === "true"
      ? "0 12.5px 100px -10px rgba(50, 50, 73, 0.4),0 10px 10px -10px rgba(50, 50, 73, 0.3)"
      : ""};
  padding: 20px;
  & h3 {
    font-size: 1.4rem !important;
    padding-bottom: 10px;
    border-bottom: solid 1px;
    margin-bottom: 2rem;
  }
  & p {
    line-height: 1.5rem;
    //  text-align: center;
  }
`;

const Source = styled.p`
  font-size: 10px;
  position: absolute;
  bottom: 6px;
  width: calc(100% - 40px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: help;
`;
