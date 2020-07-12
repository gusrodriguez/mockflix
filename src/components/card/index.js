import React from 'react';
import { StyledCardContainer, StyledCardIcon } from './styled';
import Header from '../header';

function Card(props) {
  const { source } = props;
  return (
    <StyledCardContainer>
      <img width="300px" height="382px" src={source} />
    </StyledCardContainer>
  );
};

export default Card;

