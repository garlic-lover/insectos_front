import styled from "styled-components";

export default function Loader() {
  return (
    <Wrapper className="loadingio-spinner-dual-ball-ees98e0w9ah">
      <div className="ldio-2qz4ta0bryt">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
`;
