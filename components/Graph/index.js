import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { Graph } from "@vx/network";

const nodes = [
  { x: 50, y: 20, name: "Node 1" },
  { x: 200, y: 300, name: "Node 2" },
  { x: 300, y: 40, name: "Node 3" },
];

const links = [
  { source: nodes[0], target: nodes[1] },
  { source: nodes[1], target: nodes[2] },
  { source: nodes[2], target: nodes[0] },
];

const background = "#272b4d";

function Link({ link: { source, target } }) {
  return (
    <line
      x1={source.x}
      y1={source.y}
      x2={target.x}
      y2={target.y}
      stroke="salmon"
    />
  );
}

function Node({ node: { name } }) {
  const [props, set, stop] = useSpring(() => ({ opacity: 1 }));

  console.log(name);
  return (
    <>
      <Text>{name}</Text>
      <Circle title={name} r="12" />
    </>
  );
}

export default function Example({ width, height }) {
  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} rx={14} fill={background} />
      <Graph
        graph={{ nodes, links }}
        linkComponent={Link}
        nodeComponent={Node}
      />
    </svg>
  );
}

const Circle = styled.circle`
  transition: ease 0.5s;
  cursor: pointer;
  fill: lightblue;
  &:hover {
    transform: scale(1.3);
    fill: RoyalBlue;
  }
`;

const Text = styled.text`
  fill: lightblue;
  transform: translate(16px, 20px);
`;
