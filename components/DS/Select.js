import styled from "styled-components";

export default function Input({
  name,
  description,
  options,
  value,
  valueChange,
}) {
  return (
    <Wrapper>
      <p>{name}</p>
      <select
        placeholder={name}
        value={value}
        onChange={(ev) => {
          valueChange(ev.target.value);
        }}
      >
        <option>-</option>
        {options.map((opt, index) => {
          return <option key={index}>{opt}</option>;
        })}
      </select>
      {/*    <div>{description}</div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  transform: scale(0.8);
  position: relative;
  & p {
    margin: inherit;
    margin-bottom: 8px;
    margin-left: 16px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
  }
  & select {
    transition: linear 0.2s;
    height: 50px;
    padding: 12px 16px;
    border: ${(props) =>
      props.isEmpty ? "1px solid #858c94" : " 1px solid #545D69"};
    box-sizing: border-box;
    border-radius: 8px;
    min-width: 320px;
    font-size: 16px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isEmpty ? "#6d7580" : "#09101D")};
    opacity: 0.8;
  }
  & input:active,
  & input:focus {
    border: 2px solid #004ad7;
  }
  & div {
    margin-top: 8px;
    margin-left: 16px;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #09101d;
    opacity: 0.6;
  }
`;
