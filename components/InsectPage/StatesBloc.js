import styled from "styled-components";

export default function StatesBloc({ estados }) {
  return (
    <>
      <h3>Estados</h3>
      <List>
        {estados.map(({ name }) => {
          return <li key={name}>{name}</li>;
        })}
      </List>
    </>
  );
}

const List = styled.ul`
  width: 90%;
  max-width: 800px;
  display: flex;
  margin-bottom: 24px;
  flex-wrap: wrap;
  & li {
    border-radius: 12px;
    margin-right: 6px;
    margin-bottom: 12px;
    padding: 4px 12px;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.background};
  }
`;
