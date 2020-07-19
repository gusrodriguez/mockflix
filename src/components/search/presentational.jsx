import React, { useEffect } from 'react';
import Jump from 'react-reveal/Jump';
import { StyledSearchContainer } from './styled';
import Header from '../header';
import Form from '../form';
import { StyledLockUI } from '../lock-ui/styled';

function Search(props) {
  const { backgroundLoaded, onLoadBackground } = props;

  useEffect(() => {
    const initialize = async () => {
      await onLoadBackground();
    };
    initialize();
  }, []);

  return (
    <React.Fragment>
      {
        !backgroundLoaded
          ?
          <StyledLockUI />
          :
          <React.Fragment>
            <Header revealWrapper={Jump} />
            <StyledSearchContainer>
              <Form />
            </StyledSearchContainer>
          </React.Fragment>
      }
    </React.Fragment>
  );
}

export default Search;
