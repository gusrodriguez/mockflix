import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash/debounce';
import Input from '../input';
import { SEARCH_PLACEHOLDER } from './strings';
import { AutosuggestStylesWrapper } from './styled';
import {
  SuggestionsState,
  DebounceState,
  MouseEventWithCustomTarget,
} from '../../types';
import { KeyCodes } from '../../enums';

function MoviesAutosuggest(props) {
  const {
    onLoadSuggestions,
    history,
  } = props;

  const DEFAULT_SUGGESTION_STATE = {
    value: '',
    suggestions: [],
    valueSelected: false,
  };
  const DEFAULT_DEBOUNCE_STATE = {
    isDebounced: false,
    fn: null,
  }

  const [suggestionsState, setSuggestionsState] = useState<SuggestionsState>(DEFAULT_SUGGESTION_STATE);
  const [debounceState, setDebounceState] = useState<DebounceState>(DEFAULT_DEBOUNCE_STATE);

  const onSuggestionsFetchRequested = async ({ value }) => {
    const results: Array<string> = await onLoadSuggestions(value);
    setSuggestionsState(prevState => ({
      ...prevState,
      suggestions: results,
    }));
  };

  // Just debounce the onSuggestionsFetchRequested once and keep it on the state. This is to avoid one debouncing per render cycle.
  if (!debounceState.isDebounced) {
    setDebounceState({
      isDebounced: true,
      fn: debounce(onSuggestionsFetchRequested, 300),
    });
  }

  const onChange = (event, { newValue }) => {
    setSuggestionsState(prevState => ({
      ...prevState,
      suggestions: newValue ? prevState.suggestions : [],
      value: newValue,
    }));
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === KeyCodes.ENTER) {
      history.push(`results/${suggestionsState.value}`)
    }
  };

  const onClick = (event: MouseEventWithCustomTarget<HTMLInputElement>) => {
    history.push(`results/${event.target.innerText}`)
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionsState({ ...DEFAULT_SUGGESTION_STATE });
  };

  const renderSuggestion = (suggestion: string) => {
    return (
      <React.Fragment>
        {suggestion}
      </React.Fragment>
    );
  }

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestionsContainer = ({ containerProps, children }) => (
    <div onClick={onClick} {...containerProps}>
      {children}
    </div>
  );

  const inputProps = {
    placeholder: SEARCH_PLACEHOLDER,
    value: suggestionsState.value,
    onSuggestionsClearRequested,
    onChange,
    onKeyDown,
  };

  const renderInputComponent = (inputProps) => <Input {...inputProps} />

  return (
    <AutosuggestStylesWrapper>
      <Autosuggest
        suggestions={suggestionsState.suggestions}
        onSuggestionsFetchRequested={debounceState.fn}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderInputComponent={renderInputComponent}
        renderSuggestionsContainer={renderSuggestionsContainer}
        inputProps={inputProps}
      />
    </AutosuggestStylesWrapper>
  );
}

export default withRouter(MoviesAutosuggest);

