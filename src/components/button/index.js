import React from 'react';
import {
  StyledButton,
  StyledButtonText,
  StyledButtonTextContainer
} from './styled';

function Button(props) {
  const { text, onClick } = props;
  return (
    <StyledButton onClick={() => onClick()}>
      <StyledButtonTextContainer>
          <StyledButtonText>{text}</StyledButtonText>
          <img class="icon" src="image/arrow.png" alt="" />
        </StyledButtonTextContainer>
    </StyledButton>
  );
}

export default Button;
