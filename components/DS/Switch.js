import styled from "styled-components";

export default function ST({ value, valueChange }) {
  return (
    <Switch
      isOn={value}
      onClick={() => {
        valueChange(!value);
      }}
    >
      <Circle isOn={value} />
    </Switch>
  );
}

const Switch = styled.div`
  transition: ease-in-out 0.4s;
  position: relative;
  width: 30px;
  height: 14px;
  background-color: ${(props) => (props.isOn ? "#78BFC4" : "lightgrey")};
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 1px 3px #d9ebed;
`;

const Circle = styled.div`
  transition: ease-in-out 0.2s;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  position: absolute;
  left: ${(props) => (!props.isOn ? "0px" : "100%")};
  top: 50%;
  transform: ${(props) =>
    props.isOn ? "translate(-100%, -50%)" : "translateY(-50%)"};
  background-color: white;
  border: solid 1px #d9ebed;
`;
