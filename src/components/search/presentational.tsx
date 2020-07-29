import React, { useEffect } from 'react';
import Jump from 'react-reveal/Jump';
import MoviesAutosuggest from '../movies-autosuggest';
import Header from '../header';
import { SEARCH_NOW_LABEL } from './strings';
import { StyledForm, StyledSearchContainer } from './styled';
import Button from '../button';

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

  return (
    <React.Fragment>
      {
        backgroundLoaded
          ?
          <React.Fragment>
            <Header revealWrapper={Jump} />
            <StyledSearchContainer>
              <StyledForm>
                <MoviesAutosuggest onLoadSuggestions={onLoadSuggestions} />
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
