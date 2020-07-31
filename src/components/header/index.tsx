import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  StyledHeader,
  StyledBackIconWrapper,
  StyledBackText,
  StyledBack,
  StyledLogoWrapper,
} from './styled';
import * as strings from './strings';
import Back from '../arrows/back';

interface HeaderProps extends RouteComponentProps {
  showBack: boolean,
}

function Header(props: HeaderProps) {
  const {
    showBack,
    history,
  } = props;

  const backToSearch = () => {
    history.push('/search');
  }

  return (
    <StyledHeader>
      <StyledLogoWrapper onClick={backToSearch}>
        {strings.HEADER_TEXT}
      </StyledLogoWrapper>
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
