import React from 'react';
import IconClose from '../icon-close';
import { StyledInput, IconCloseWrapper } from './styled';

function Input(props) {
  const { value, onSuggestionsClearRequested } = props;
  return (
    <React.Fragment>
    <StyledInput {...props} />
    {
      value &&
      <IconCloseWrapper onClick={onSuggestionsClearRequested}>
        <IconClose />
      </IconCloseWrapper>
    }
  </React.Fragment>
  );
}
export default Input;
