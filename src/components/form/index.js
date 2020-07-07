import React from 'react';
import { StyledForm } from './styled';
import { StyledInput } from '../input/styled';
import Button from '../button';
import * as strings from './strings';

function SearchForm() {
  return (
    <StyledForm>
      <StyledInput />
      <Button text={strings.SEARCH_NOW_LABEL}/>
    </StyledForm>
  );
};

export default SearchForm;

