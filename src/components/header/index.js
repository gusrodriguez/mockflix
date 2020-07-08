import React from 'react';
import Jump from 'react-reveal/Jump';
import {
  StyledHeader,
} from './styled';

function Header(props) {
  const { text } = props;
  return (

    <StyledHeader>
      <Jump>
        {text}
      </Jump>
    </StyledHeader>

  );
}

export default Header;
