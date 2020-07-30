import React, { useState } from 'react';
import {
  StyledCardContainer,
  StyledCardHover,
  StyledImageWrapper,
} from './styled';
import { IMAGE_PLACEHOLDER } from '../../services/movie/constants';
import playButtonImage from '../../assets/images/play-button.png';

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
      <StyledCardHover>
        <StyledImageWrapper>
          <img
            width="90px"
            height="90px"
            src={playButtonImage}
          />
        </StyledImageWrapper>
      </StyledCardHover>
    </StyledCardContainer>
  );
};

export default Card;
