import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  StyledHeader,
  StyledBackIconWrapper,
  StyledBackText,
  StyledBack,
} from './styled';
import * as strings from './strings';
import Back from '../arrows/back';

interface HeaderProps extends RouteComponentProps {
  revealWrapper?: React.ElementType,
  showBack: boolean,
}

function Header(props: HeaderProps) {
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

export default withRouter(Header);
