import React, { useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import Jump from 'react-reveal/Jump';
import debounce from 'lodash/debounce';
import IconClose from '../icon-close';
import { StyledSearchContainer } from './styled';
import Header from '../header';
import { SuggestionsState, DebounceState } from '../../types';
import { SEARCH_PLACEHOLDER, SEARCH_NOW_LABEL } from './strings';
import { StyledInput } from '../input/styled';
import { StyledForm, IconCloseWrapper } from './styled';
import Button from '../button';

// type SearchProps = {
//   backgroundLoaded: boolean,
//   onLoadBackground: () => void,
// }

function Search(props) {
  const {
    backgroundLoaded,
    onLoadBackground,
    onLoadSuggestions,
  } = props;


  useEffect(() => {
    const initialize = async (): Promise<void> => {
      await onLoadBackground();
    };
    initialize();
  }, []);

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
  if(!debounceState.isDebounced) {
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
      value: newValue,
    }));
  };

  const getSuggestionValue = suggestion => {
    setSuggestionsState(prevState => ({
      ...prevState,
      suggestions: [],
    }));
    return suggestion;
  };

  const renderSuggestion = (suggestion: Array<string>) => {
    return (
      <React.Fragment>
        {suggestion}
      </React.Fragment>
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
          !!suggestionsState.suggestions.length &&
          <IconCloseWrapper>
            <IconClose clearInput={onSuggestionsClearRequested} />
          </IconCloseWrapper>
        }
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {
        backgroundLoaded
          ?
          <React.Fragment>
            <Header revealWrapper={Jump} />
            <StyledSearchContainer>
              <StyledForm>
                <Autosuggest
                  suggestions={suggestionsState.suggestions}
                  onSuggestionsFetchRequested={debounceState.fn}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  renderInputComponent={renderInputComponent}
                  inputProps={inputProps}
                />
                <Button onClick={() => { }} text={SEARCH_NOW_LABEL} />
              </StyledForm>
            </StyledSearchContainer>
          </React.Fragment>
          :
          null
      }
    </React.Fragment>
  );
}

export default Search;

