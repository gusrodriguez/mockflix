import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash/debounce';
import { Input, InputProps } from '../input';
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

type MoviesAutosuggestProps = {
  onLoadSuggestions: (value: string) => Promise<Array<string>>,
  onActivateSearch: (isSearchActive: boolean) => void,
  isSearchActive: boolean,
}

function MoviesAutosuggest(props: MoviesAutosuggestProps) {
  const {
    onLoadSuggestions,
    onActivateSearch,
    isSearchActive,
  } = props;

  const DEFAULT_SUGGESTION_STATE: SuggestionsState = {
    value: '',
    suggestions: [],
  };

  const DEFAULT_DEBOUNCE_STATE: DebounceState = {
    isDebounced: false,
    fn: null,
  }

  const [suggestionsState, setSuggestionsState] = useState<SuggestionsState>(DEFAULT_SUGGESTION_STATE);
  const [debounceState, setDebounceState] = useState<DebounceState>(DEFAULT_DEBOUNCE_STATE);

  // fully reload on purpose, to workaround the issue of react router cache messing the carousels animation effect
  const redirect = (route: string) => { window.location.href = route };

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
    onActivateSearch(!!newValue);
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

  const getSuggestionValue = (suggestion: string) => suggestion;

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

  const renderInputComponent = (inputProps: InputProps) => <Input {...inputProps} />

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
      <Button onClick={onButtonClick} text={SEARCH_NOW_LABEL} isActive={isSearchActive} />
    </React.Fragment>
  );
}

export default MoviesAutosuggest;

