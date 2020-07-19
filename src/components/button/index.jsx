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
        </StyledButtonTextContainer>
    </StyledButton>
  );
}

export default Button;
