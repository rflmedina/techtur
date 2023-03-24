import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchIcon = styled.i`
  margin-right: 0.5rem;
  color: #666;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
`;

const Search = () => {
  return (
    <SearchContainer>
      <BiSearch/>
      <SearchInput type="text" placeholder="Buscar funcionário" />
    </SearchContainer>
  );
};

export default Search;
