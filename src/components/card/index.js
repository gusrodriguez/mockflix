import React from 'react';
import { StyledCardContainer, StyledCardIcon } from './styled';
import Header from '../header';
import { PLACEHOLDER_URL } from '../../services/movie/constants';

function Card(props) {
  const { image } = props;

  return (
    <StyledCardContainer>
      <img width="300px" height="382px" src={image || PLACEHOLDER_URL} />
    </StyledCardContainer>
  );
};

export default Card;

