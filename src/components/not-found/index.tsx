import React from 'react';
import { StyledImageContainer, StyledImage } from './styled';
import notFoundImage from '../../assets/images/404.png';

function NotFound() {
  return(
    <StyledImageContainer>
      <StyledImage src={notFoundImage} />
    </StyledImageContainer>
  );
}

export default NotFound;
