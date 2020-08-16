import React, { useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import MoviesAutosuggest from '../movies-autosuggest';
import Header from '../header';
import { AnyAction } from 'redux';
import { StyledForm, StyledSearchContainer } from './styled';

type SearchProps = {
  backgroundLoaded: boolean,
  isSearchActive: boolean,
  onLoadBackground: () => void,
  onLoadSuggestions: (value: string) => Promise<Array<string>>,
  onActivateSearch: (isActiveSearch: boolean) => AnyAction,
};

function Search(props: SearchProps) {
  const {
    backgroundLoaded,
    isSearchActive,
    onLoadBackground,
    onLoadSuggestions,
    onActivateSearch,
  } = props;

  // Convert the font loading in a promise and wait for it to load
  const font = new FontFaceObserver('BebasNeue', {
    style: 'normal',
    weight: 400,
  })

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      await font.load();
      onLoadBackground();
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
                <MoviesAutosuggest
                  onLoadSuggestions={onLoadSuggestions}
                  onActivateSearch={onActivateSearch}
                  isSearchActive={isSearchActive}
                />
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

