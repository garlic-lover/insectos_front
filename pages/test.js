import styled from "styled-components";

import Graph from "../components/Graph";

export default function Test() {
  return (
    <Wrapper>
      <Graph width={400} height={400} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 550px;
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;
