import styled from "styled-components";

export default function FamilyBloc({ insect: { order, commonNames, family } }) {
  return (
    <Wrapper>
      <div>
        <img
          src={`/icons/${
            order.sub?.replace(" ", "") === "Heteroptera"
              ? "heteroptera"
              : order.main.toLowerCase().replace(" ", "")
          }.svg`}
        />
      </div>
      <div>
        <p>
          <span>Nombres comunes :</span>
          {commonNames.map(
            (el, index) =>
              `${el}${index === commonNames.length - 1 ? "." : ","}`
          )}
        </p>
        <p>
          <span>Orden :</span> {order?.main}{" "}
        </p>
        <p>
          <span>Familia :</span> {family}
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  & img {
    height: 72px;
    width: 72px;
    margin-right: 24px;
    display: block;
  }
  & p {
    margin-bottom: 12px;
    line-height: 1.5;
    max-width: 400px;
  }
  & p span {
    padding-bottom: 1px;
    border-bottom: solid 1.5px;
    margin-right: 6px;
  }
  & p:last-child {
    margin-bottom: 0px;
  }
`;
