import React from 'react';
import image from '../../assets/images/movies.jpg'

// This component will only preload the backgroound.
// As webpack will convert the image imported module {image} to the same url across the app, the image will be already cached in the browser for when any other component requests it.

function BackgroundLoader() {
  const { backgroundLoaded } = props;
  return (
    <div style={{ display: 'none' }}>
      <img src={image} onLoad={() => backgroundLoaded(true)} />
    </div>
  )
}

export default BackgroundLoader
