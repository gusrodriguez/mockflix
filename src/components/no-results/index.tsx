import React from 'react';
import Message from './message';
import { StyledNoResultsContainer } from './styled';
import LensIcon from './lens-icon'

function NoResults() {
  return (
    <StyledNoResultsContainer>
      <LensIcon />
      <Message />
    </StyledNoResultsContainer>
  )
}

export default NoResults;
