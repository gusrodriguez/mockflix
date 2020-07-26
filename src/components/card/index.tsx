import React, { useState } from 'react';
import { StyledCardContainer } from './styled';
import { IMAGE_PLACEHOLDER } from '../../services/movie/constants';

type CardProps = {
  image?: string,
}

function Card(props: CardProps) {
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
