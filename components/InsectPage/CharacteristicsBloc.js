import styled from "styled-components";

export default function CharacteristicsBloc({
  insect: {
    eatableStates,
    isSold,
    isAutoConsummed,
    isComestible,
    isMedicinal,
    isTradicional,
  },
}) {
  return (
    <>
      <h3>Características</h3>
      <Wrapper>
        <div>
          <p>Se consume en formas de : </p>
          <p>{eatableStates}</p>
        </div>
        <div>
          <p>Se vende : </p>
          <p>
            {isSold ? (
              <span className="lnr lnr-thumbs-up" />
            ) : (
              <span className="lnr lnr-question-circle" />
            )}
          </p>
        </div>
        <div>
          <p>Autoconsume : </p>
          <p>
            {isAutoConsummed ? (
              <span className="lnr lnr-thumbs-up" />
            ) : (
              <span className="lnr lnr-question-circle" />
            )}
          </p>
        </div>
        <div>
          <p>Se come : </p>
          <p>
            {isComestible ? (
              <span className="lnr lnr-thumbs-up" />
            ) : (
              <span className="lnr lnr-question-circle" />
            )}
          </p>
        </div>
        <div>
          <p>Es medicinal : </p>
          <p>
            {isMedicinal ? (
              <span className="lnr lnr-thumbs-up" />
            ) : (
              <span className="lnr lnr-question-circle" />
            )}
          </p>
        </div>
        <div>
          <p>Es tradicional : </p>
          <p>
            {isTradicional ? (
              <span className="lnr lnr-thumbs-up" />
            ) : (
              <span className="lnr lnr-question-circle" />
            )}
          </p>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1px;
  row-gap: 1px;
  background-color: ${(props) => props.theme.main};
  & div {
    display: flex;
    background-color: ${(props) => props.theme.background};
    padding: 8px 16px;
    justify-content: space-between;
  }
  & p {
    line-height: 1.5;
  }
  & p:last-child {
  }
  & p:first-child {
    width: 160px;
  }
  & span {
    font-size: 18px;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
