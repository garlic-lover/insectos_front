import styled from "styled-components";
import { InputLabel, Select, MenuItem } from "@material-ui/core";

export default function SearchBar() {
  return (
    <Wrapper>
      <Title>Filter</Title>
      <Search>
        <input placeholder="Search a specie" />
      </Search>
      <Filters>
        <InputLabel id="orderSelect">Order</InputLabel>
        <Select labelId="orderSelect" value="Coleoptera">
          <MenuItem value="-">-</MenuItem>
          <MenuItem value="Coleoptera">Coleoptera</MenuItem>
        </Select>
      </Filters>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  max-height: 100%;
  overflow: scroll;
  width: 360px;
  border-right: solid 1px;
`;

const Title = styled.div`
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.background};
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Search = styled.div`
  transition: box-shadow 0.2s ease;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 16%);
  padding: 12px 20px;
  margin: 12px;
  &:hover {
    box-shadow: 0 3px 8px 0 rgb(0 0 0 / 16%);
  }
  & input {
    width: 100%;
  }
  & input::placeholder {
    color: #d3d5d6;
  }
`;

const Filters = styled.div`
  margin: 24px 12px 0;
`;
