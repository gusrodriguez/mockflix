import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash/debounce';
import IconClose from '../icon-close';
import { SEARCH_PLACEHOLDER } from './strings';
import { StyledInput } from '../input/styled';
import { IconCloseWrapper, AutosuggestStylesWrapper } from './styled';
import { SuggestionsState, DebounceState } from '../../types';

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
  const [openState, setOpenState] = useState<boolean>(false);

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

  const onSuggestionsClearRequested = () => {
    setSuggestionsState({ ...DEFAULT_SUGGESTION_STATE });
  };

  const onChange = (event, { newValue }) => {
    setSuggestionsState(prevState => ({
      ...prevState,
      suggestions: newValue ? prevState.suggestions : [],
      value: newValue,
    }));
  };

  const renderSuggestion = (suggestion: string) => {
    return (
      <React.Fragment>
        {suggestion}
      </React.Fragment>
    );
  }

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestionsContainer = ({ containerProps, children }) => {
    const isOpen = containerProps.className.includes('react-autosuggest__suggestions-container--open');
    setOpenState(isOpen);

    return (
      <div {...containerProps}>
        {children}
      </div>
    );
  }

  const inputProps = {
    placeholder: SEARCH_PLACEHOLDER,
    value: suggestionsState.value,
    onChange,
  };

  const renderInputComponent = (inputProps) => {
    return (
      <React.Fragment>
        <StyledInput {...inputProps} />
        {
          openState &&
          <IconCloseWrapper>
            <IconClose clearInput={onSuggestionsClearRequested} />
          </IconCloseWrapper>
        }
      </React.Fragment>
    );
  }

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

export default MoviesAutosuggest;

