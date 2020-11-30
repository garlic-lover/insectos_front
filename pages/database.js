import styled from "styled-components";

export default function DataBase() {
  return (
    <Wrapper>
      <h2>Add a recepe</h2>
      <h3>Region</h3>
      <select>
        <option>Oaxaca</option>
        <option>Chiapas</option>
      </select>
      <h3>Insect(s) used</h3>
      <select>
        <option>Chapulines</option>
        <option>Gusano</option>
      </select>
      <h3>Detail</h3>
      <textarea />
      <div>
        <button>Submit</button>
      </div>
      <p>
        (Este pagina es solamente un ejemplo de tipo de interfaca que podriamos
        hacer para anadir informacion a la basa de datos)
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  & h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  & textarea {
    padding: 20px;
  }
  & button {
    transition: ease-in-out 0.3s;
    margin-top: 1rem;
    border: solid 1px lightGrey;
    padding: 6px 12px;
  }
  & button:hover {
    border-color: rgba(0, 0, 0, 0.5);
  }
  & p {
    font-size: 10px;
    margin-top: 2rem;
  }
`;
