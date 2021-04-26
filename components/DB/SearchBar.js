import { useState } from "react";
import styled from "styled-components";
import { InputLabel, Select, MenuItem, Button } from "@material-ui/core";

import useTranslate from "@hooks/useTranslate";

export default function SearchBar({ filters, filtersInit }) {
  const { t } = useTranslate();
  const [filtersDisplay, filtersDisplayChange] = useState(false);

  function handleToggleFilterDisplay() {
    filtersDisplayChange(!filtersDisplay);
  }

  return (
    <Wrapper>
      <Title>Filter</Title>
      <Search>
        <input placeholder="Search a specie" />{" "}
        <span className="lnr lnr-funnel" onClick={handleToggleFilterDisplay} />
      </Search>
      <Filters filtersDisplay={filtersDisplay}>
        {filters.map(({ value, change, label, options }) => {
          return (
            <div key={label}>
              <InputLabel id={label}>{label}</InputLabel>
              <StyledSelect
                labelId={label}
                value={value}
                onChange={(e) => change(e.target.value)}
              >
                <MenuItem value="-">-</MenuItem>
                {options.map(({ name, _id }) => {
                  return (
                    <MenuItem key={name} value={_id ? _id : name}>
                      {name}
                    </MenuItem>
                  );
                })}
              </StyledSelect>
            </div>
          );
        })}
        <ResetButton
          variant="outlined"
          disabled={filters[0].value === "-" && filters[1].value === "-"}
          onClick={filtersInit}
        >
          {t("dbPage").initFilters}
        </ResetButton>
      </Filters>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  max-height: 100%;
  overflow: scroll;
  width: 280px;
  border-right: solid 1px;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const Title = styled.div`
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.background};
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  @media (max-width: 680px) {
    display: none;
  }
`;

const Search = styled.div`
  transition: box-shadow 0.2s ease;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 16%);
  padding: 12px 20px;
  margin: 12px;
  display: flex;
  flex: 1;
  & span {
    font-size: 24px;
  }
  &:hover {
    box-shadow: 0 3px 8px 0 rgb(0 0 0 / 16%);
  }
  & input {
    width: 100%;
  }
  & input::placeholder {
    color: #d3d5d6;
  }
  @media (min-width: 680px) {
    & span {
      display: none;
    }
  }
`;

const Filters = styled.div`
  margin: 24px 12px 0;
  & select {
    margin-bottom: 12px;
  }
  @media (max-width: 680px) {
    display: ${(props) => (props.filtersDisplay ? "" : "none")};
  }
`;

const StyledSelect = styled(Select)`
  margin-bottom: 24px;
  width: 200px;
`;

const ResetButton = styled(Button)`
  font-family: OpenSans;
`;
