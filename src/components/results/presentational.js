import React, { useEffect } from 'react';
import chunk from 'lodash/chunk';
import Zoom from 'react-reveal/Zoom';
import Header from '../header';
import Carousel from '../carousel';
import {
  StyledResultsWrapper,
} from './styled';

function Results(props) {
  const { onLoadResults, results } = props;

  useEffect(() => {
    const fetchData = async () => {
      await onLoadResults();
    };
    fetchData();
  }, []);

  const resultsLoaded = results && results.length;

  // Divide the results array in two, for filling the two sliders
  const half = Math.ceil(results.length / 2);
  const [firstSliderSource, secondSliderSource] = chunk(results, half);

  return (
    <React.Fragment>
      <Header />
      <StyledResultsWrapper>
        <Zoom when={resultsLoaded}>
          <Carousel source={firstSliderSource} />
          <Carousel source={secondSliderSource} />
        </Zoom>
      </StyledResultsWrapper>
    </React.Fragment>
  );
}

export default Results;
