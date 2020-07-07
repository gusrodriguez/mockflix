import React from 'react';
import {
  StyledHeader,
} from './styled';

function Header(props) {
  const { text } = props;
  return (
    <StyledHeader>
     {text}
    </StyledHeader>
  );
}

export default Header;
