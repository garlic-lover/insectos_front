import Link from "next/link";
import styled from "styled-components";

import useTranslate from "@hooks/useTranslate";

export default function List({ insects }) {
  const { t } = useTranslate();

  return (
    <Wrapper>
      {insects.length === 0 && (
        <NoInsect>{t("dbPage").noInsectFound}...</NoInsect>
      )}
      <Grid>
        {insects.map(
          ({ order, family, specie, commonNames, estados, references }) => {
            return (
              <InsectCard key={specie}>
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
                <p>
                  {t("dbPage").commonNames} : {commonNames}
                </p>
                <p>
                  {t("dbPage").reportedIn} {estados.length} {t("dbPage").state}
                  {estados.length > 1 && "s"} ({references.length}{" "}
                  {t("dbPage").source}
                  {references.length > 1 && "s"})
                </p>
                <Link href={`/db/${specie}`}>{`${
                  t("dbPage").moreInfo
                } >`}</Link>
              </InsectCard>
            );
          }
        )}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 92px - 96px);
`;

const NoInsect = styled.p`
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
  margin-bottom: 32px;
  padding: 0 16px;
  @media (max-width: 972px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
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
