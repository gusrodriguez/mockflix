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
import BackgroundLoader from '../background-loader';

function Results(props) {
  const { onLoadResults, results } = props;

  useEffect(() => {
    const fetchData = async () => {
      await onLoadResults(props.match.params.query);
    };
    fetchData();
  }, []);

  const resultsLoaded = results && results.length;

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  // Divide the results array in two, for filling the two sliders
  const half = Math.ceil(results.length / 2);
  const [firstSliderSource, secondSliderSource] = chunk(results, half);

  return (
    <React.Fragment>
      <BackgroundLoader backgroundLoaded={setBackgroundLoaded} />
      <Header />
      {
        !backgroundLoaded
          ?
          <StyledLockUI />
          :
          <StyledResultsWrapper>
            <Zoom when={resultsLoaded}>
              <Carousel source={firstSliderSource} />
              <Carousel source={secondSliderSource} />
            </Zoom>
          </StyledResultsWrapper>
      }
    </React.Fragment>
  );
}

export default Results;
