import styled from "styled-components";

export default function BiblioBloc({ references }) {
  console.log(references);
  return (
    <>
      <h3>Referencias bibliograficas</h3>
      <List>
        {references.map(
          ({
            clave,
            _id: { name, date, authors, editorial, number, pages, volume },
          }) => {
            return (
              <li key={clave}>
                {authors.map((author, index) => `${author}, `)} {name} ({date})
                {editorial && `, ${editorial}`}
                {number && `, number    ${number}`}
                {pages.from && `, p.${pages.from}`}
                {pages.to && `-${pages.to}`}
                {volume && `, volumen ${volume}`}
              </li>
            );
          }
        )}
      </List>
    </>
  );
}

const List = styled.ul`
  margin-bottom: 32px;
  border-top: solid 1px;
  border-bottom: solid 1px;
  width: 90%;
  max-width: 800px;
  & li {
    border-bottom: solid 1px;
    width: 100%;
    max-width: 100%;
    padding: 12px 0px;
    line-height: 1.5;
    word-break: break-word;
  }
  & li:nth-child(2) {
    //background-color: rgba(160, 84, 56, 0.3);
  }
  & li:last-child {
    border-bottom: none;
  }
`;
