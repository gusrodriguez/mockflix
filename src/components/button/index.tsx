import React from 'react';
import {
  StyledButton,
  StyledButtonText,
  StyledButtonTextContainer
} from './styled';

type ButtonProps = {
  text: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean,
}

function Button(props: ButtonProps) {
  const { text, isActive, onClick } = props;
  return (
    <StyledButton onClick={onClick} disabled={!isActive}>
      <StyledButtonTextContainer>
          <StyledButtonText>{text}</StyledButtonText>
        </StyledButtonTextContainer>
    </StyledButton>
  );
}

export default Button;
