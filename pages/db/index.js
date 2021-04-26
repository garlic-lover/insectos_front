import styled from "styled-components";

import Footer from "@components/Footer";

import SearchBar from "@components/DB/SearchBar";
import List from "@components/DB/List";
import Loader from "@components/DS/Loader";

import useDBManage from "@components/DB/utils/useDBManage";

export default function DB() {
  const { loading, error, insects, filters, filtersInit } = useDBManage();
  return (
    <Wrapper>
      <SearchBar filters={filters} filtersInit={filtersInit} />
      <Main>
        {error ? (
          "Error"
        ) : !insects ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <List insects={insects} />
        )}
        <Footer />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const LoaderWrapper = styled.div`
  position: relative;
  flex: 1;
  height: calc(100vh - 92px);
`;

const Main = styled.div`
  position: relative;
  padding-top: 32px;
  flex: 1;
  height: calc(100vh - 92px);
  overflow: scroll;
  @media (max-width: 680px) {
    padding-top: 0px;
  }
`;
