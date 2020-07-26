import React, { useEffect } from 'react';
import Jump from 'react-reveal/Jump';
import { StyledSearchContainer } from './styled';
import Header from '../header';
import Form from '../form';

type SearchProps = {
  backgroundLoaded: boolean,
  onLoadBackground: () => void,
}

function Search(props: SearchProps) {
  const { backgroundLoaded, onLoadBackground } = props;

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
              <Form />
            </StyledSearchContainer>
          </React.Fragment>
          :
          null
      }
    </React.Fragment>
  );
}

export default Search;
