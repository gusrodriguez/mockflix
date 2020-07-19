import React, { useState } from 'react';
import { StyledSearchContainer } from './styled';
import Header from '../header';
import Form from '../form';
import { StyledLockUI } from '../lock-ui/styled';
import image from '../../assets/images/movies.jpg'

function Search() {

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  return (
    <React.Fragment>
      <Header />
      {/*
        The component will render the spinner until the background image is preloaded.
        As webpack will convert the image imported module {image} to the same url across the app, the image will be already cached when the StyledBody component sets it as background.
      */}
      <div style={{ display: 'none' }}>
        <img src={image} onLoad={() => setBackgroundLoaded(true)} />
      </div>
      {
        !backgroundLoaded
          ?
          <StyledLockUI />
          :
          <StyledSearchContainer>
            <Form />
          </StyledSearchContainer>
      }
    </React.Fragment>
  );
}

export default Search;
