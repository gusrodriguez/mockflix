import React, { useState } from 'react';
import { StyledCardContainer, StyledCardIcon } from './styled';
import Header from '../header';
import { IMAGE_PLACEHOLDER } from '../../services/movie/constants';

function Card(props) {
  const { image } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledCardContainer>
      <img
        width="300px"
        height="382px"
        src={imageLoaded && image ? image : IMAGE_PLACEHOLDER}
        onLoad={() => setImageLoaded(true)}
      />
    </StyledCardContainer>
  );
};

export default Card;
