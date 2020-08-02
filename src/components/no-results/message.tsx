import React from 'react';
import { StyledText, StyledLink } from './styled';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as strings from './strings';

function Message(props: RouteComponentProps) {
  const { history } = props;

  const backToSearch = () => {
    history.push('/search');
  }

  return(
    <StyledText >
      {strings.NO_RESULTS_START_TEXT}
      <StyledLink onClick={backToSearch}>{strings.BACK_TO_SEARCH}</StyledLink>
      {strings.NO_RESULTS_END_TEXT}
    </StyledText>
  )
}
export default withRouter(Message);
