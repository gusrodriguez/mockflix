import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash/debounce';
import Input from '../input';
import { SEARCH_NOW_LABEL } from './strings';
import Button from '../button';
import { SEARCH_PLACEHOLDER, getResultsRoute } from './strings';
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

  // fully reload on purpose, to workaround the issue of react router cache messing the carousels animation effect
  const redirect = route => { window.location.href = route };

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
     redirect(getResultsRoute(suggestionsState.value));
    }
  };

  const onSuggestionClick = (event: MouseEventWithCustomTarget<HTMLInputElement>) => {
    redirect(getResultsRoute(event.target.innerText));
  };

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    redirect(getResultsRoute(suggestionsState.value));
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
    <div onClick={onSuggestionClick} {...containerProps}>
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

  const renderInputComponent = inputProps => <Input {...inputProps} />

  return (
    <React.Fragment>
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
      <Button onClick={onButtonClick} text={SEARCH_NOW_LABEL} />
    </React.Fragment>
  );
}

export default MoviesAutosuggest;

