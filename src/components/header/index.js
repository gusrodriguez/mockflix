import React from 'react';
import Jump from 'react-reveal/Jump';
import { StyledHeader } from './styled';
import * as strings from './strings';

function Header() {
  return (
    <StyledHeader>
      <Jump>
        {strings.HEADER_TEXT}
      </Jump>
    </StyledHeader>

  );
}

export default Header;
