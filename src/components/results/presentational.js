import React, { useEffect, useState } from 'react';
import chunk from 'lodash/chunk';
import Zoom from 'react-reveal/Zoom';
import Header from '../header';
import Carousel from '../carousel';
// import image from '../../assets/images/movies.jpg'
import {
  StyledResultsWrapper,
} from './styled';
import { StyledLockUI } from '../lock-ui/styled';

function Results(props) {
  const {
    results,
    backgroundLoaded,
    onLoadResults,
    onLoadBackground,
  } = props;

  useEffect(() => {
    const initialize = async () => {
      await Promise.all([
        onLoadBackground(),
        onLoadResults(props.match.params.query),
      ]);
    };
    initialize();
  }, []);

  const resultsLoaded = results && results.length;

  // Divide the results array in two, for filling the two sliders
  const half = Math.ceil(results.length / 2);
  const [firstSliderSource, secondSliderSource] = chunk(results, half);

  return (
    <React.Fragment>
      {
        !backgroundLoaded
          ?
          <StyledLockUI />
          :
          <React.Fragment>
            <Header />
            <StyledResultsWrapper>
              <Zoom when={resultsLoaded}>
                <Carousel source={firstSliderSource} />
                <Carousel source={secondSliderSource} />
              </Zoom>
            </StyledResultsWrapper>
          </React.Fragment>
      }
    </React.Fragment>
  );
}

export default Results;
