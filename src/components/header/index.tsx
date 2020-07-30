import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  StyledHeader,
  StyledBackIconWrapper,
  StyledBackText,
  StyledBack,
} from './styled';
import * as strings from './strings';
import Back from '../arrows/back';

// type HeaderProps = {
//   revealWrapper?: React.ElementType,
// }

function Header(props) {
  debugger;
  const { revealWrapper, showBack, history } = props;
  const AnimationWrapper = revealWrapper || React.Fragment;

  const backToSearch = () => {
    history.push('/search');
  }

  return (
    <StyledHeader>
      <AnimationWrapper>
        {strings.HEADER_TEXT}
      </AnimationWrapper>
      {
        showBack &&
        <StyledBack>
          <StyledBackIconWrapper onClick={backToSearch}>
            <Back />
          </StyledBackIconWrapper>
          <StyledBackText>{strings.BACK_TO_SEARCH}</StyledBackText>
        </StyledBack>
      }
    </StyledHeader>
  );
}

Header.defaultProps = {
  children: null,
}

export default withRouter(Header);
