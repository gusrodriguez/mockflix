import React from 'react';
import IconClose from '../icon-close';
import { StyledInput, IconCloseWrapper } from './styled';

export type InputProps = {
  value: string,
  onSuggestionsClearRequested: () => void,
}

export const Input = (props: InputProps) => {
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

