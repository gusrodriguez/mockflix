import React from 'react';
import { StyledSearchContainer } from './styled';
import Header from '../header';
import Form from '../form';

function Search() {
  return (
    <React.Fragment>
      <Header />
      <StyledSearchContainer>
        <Form />
      </StyledSearchContainer>
    </React.Fragment>
  );
}

export default Search;
