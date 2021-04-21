import Link from "next/link";
import styled from "styled-components";

export default function List({ insects }) {
  return (
    <Wrapper>
      {insects.map(
        ({ order, family, specie, commonNames, estados, references }) => {
          return (
            <InsectCard key={commonNames}>
              <FirstLine>
                <img
                  src={`/icons/${
                    order.sub?.replace(" ", "") === "Heteroptera"
                      ? "heteroptera"
                      : order.main.toLowerCase().replace(" ", "")
                  }.svg`}
                />
                <div>
                  <h4>{specie}</h4>
                  <h5>
                    {order.main} {order.sub && `(${order.sub})`}
                  </h5>
                </div>
              </FirstLine>
              <p>{family ? family : "No familia registrada"}</p>
              <p>Nombres communes : {commonNames}</p>
              <p>
                Reportado en {estados.length} estados ({references.length}{" "}
                fuente{references.length > 1 && "s"})
              </p>
              <Link href={`/db/${specie}`}>Mas informacion ></Link>
            </InsectCard>
          );
        }
      )}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
  margin-bottom: 32px;
  padding: 0 16px;
`;

const InsectCard = styled.li`
  //border: solid 1px;
  background-color: white;
  padding: 12px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 16%);
  &:hover {
    box-shadow: 0 3px 8px 0 rgb(0 0 0 / 16%);
  }
  & h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    font-style: italic;
  }
  & h5 {
    margin-bottom: 12px;
    font-size: 11px;
  }
  & p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 6px;
  }
  & p span {
    text-decoration: underline;
  }
  & a {
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
    display: block;
    margin-top: 6px;
    color: inherit;
  }
`;

const FirstLine = styled.div`
  display: flex;
  & img {
    height: 24px;
    margin-right: 12px;
  }
`;
