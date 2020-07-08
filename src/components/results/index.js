import React from 'react';
import Header from '../header';
import Card from '../card';
import { StyledResultsContainer } from './styled';

function Results() {
  return (
    <React.Fragment>
      <Header />
      <StyledResultsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledResultsContainer>
    </React.Fragment>
  );
}

export default Results;
