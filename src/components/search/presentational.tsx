import React, { useEffect, useState } from 'react';
import suggestedEntries from './suggested-entries';
import Autosuggest from 'react-autosuggest';
import Jump from 'react-reveal/Jump';
import IconClose from '../icon-close';
import { StyledSearchContainer } from './styled';
import Header from '../header';
import { SuggestionsState } from '../../types';
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
    onSearch,
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
  };

  const [suggestionsState, setSuggestionsState] = useState<SuggestionsState>(DEFAULT_SUGGESTION_STATE)

  const onChange = (event, { newValue }) => {
    setSuggestionsState(prevState => ({
      ...prevState,
      value: newValue,
    }));
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestionsState(prevState => ({
      ...prevState,
      suggestions: getSuggestions(value),
    }));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionsState({ ...DEFAULT_SUGGESTION_STATE });
  }

  const getSuggestionValue = async (suggestion) => {
    await onSearch(suggestion);
    return suggestion;
  }

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : suggestedEntries.filter(entry =>
      entry.toLowerCase().includes(inputValue),
    );
  }

  const renderSuggestion = (suggestion) => {
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
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
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

