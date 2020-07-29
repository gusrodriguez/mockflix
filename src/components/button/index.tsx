import React from 'react';
import {
  StyledButton,
  StyledButtonText,
  StyledButtonTextContainer
} from './styled';

type ButtonProps = {
  text: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: ButtonProps) {
  const { text, onClick } = props;
  return (
    <StyledButton onClick={onClick}>
      <StyledButtonTextContainer>
          <StyledButtonText>{text}</StyledButtonText>
        </StyledButtonTextContainer>
    </StyledButton>
  );
}

export default Button;
