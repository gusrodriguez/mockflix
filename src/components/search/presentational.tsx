import React, { useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import MoviesAutosuggest from '../movies-autosuggest';
import Header from '../header';
import { StyledForm, StyledSearchContainer } from './styled';

function Search(props) {
  const {
    backgroundLoaded,
    onLoadBackground,
    onLoadSuggestions,
  } = props;

  // Convert the font loading in a promise and wait for it to load
  const font = new FontFaceObserver('BebasNeue', {
    style: 'normal',
    weight: 400,
  })

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      await font.load();
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
            <Header showBack={false} />
            <StyledSearchContainer>
              <StyledForm>
                <MoviesAutosuggest onLoadSuggestions={onLoadSuggestions} />
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

