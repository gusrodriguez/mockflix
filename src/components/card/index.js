import React from 'react';
import { StyledCardContainer, StyledCardIcon } from './styled';
import Header from '../header';

function Card(props) {
  const { source } = props;

  if (!source) return null;

  return (
    <StyledCardContainer>
         <img width="300px" height="382px" src={source} />
      <StyledCardIcon>
      </StyledCardIcon>
    </StyledCardContainer>
  );
};

export default Card;

