import React from 'react';
import { StyledHeader } from './styled';
import * as strings from './strings';

function Header(props) {
  const { revealWrapper } = props;
  const AnimationWrapper = revealWrapper || React.Fragment;

  return (
    <StyledHeader>
      <AnimationWrapper>
        {strings.HEADER_TEXT}
      </AnimationWrapper>
    </StyledHeader>
  );
}

export default Header;
