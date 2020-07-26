import React from 'react';
import { StyledHeader } from './styled';
import * as strings from './strings';

type HeaderProps = {
  revealWrapper?: React.ElementType,
}

function Header(props: HeaderProps) {
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

Header.defaultProps = {
  children: null,
}

export default Header;
