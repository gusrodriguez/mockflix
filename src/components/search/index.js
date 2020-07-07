import React from 'react';
import { StyledBody, StyledSearchContainer } from './styled';
import Header from '../header';
import * as strings from './strings';
import Form from '../form';

function Search(props) {
  const { plates, auth } = props;
  return (
    <React.Fragment>
      <StyledBody />
      <Header text={strings.HEADER_TEXT} />
      <StyledSearchContainer>
      <Form />
      </StyledSearchContainer>
    </React.Fragment>
  );
}

export default Search;
