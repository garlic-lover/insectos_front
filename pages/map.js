import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map/Container"), {
  ssr: false,
});

import styled from "styled-components";

export default function MapPage() {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <Wrapper>
      <Map />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 94%;
  max-width: 1040px;
  margin: auto;
`;
