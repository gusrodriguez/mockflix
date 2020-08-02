import React, { useEffect } from 'react';
import chunk from 'lodash/chunk';
import Zoom from 'react-reveal/Zoom';
import Header from '../header';
import Carousel from '../carousel';
import NoResults from '../no-results';

import {
  StyledResultsWrapper,
} from './styled';

import { Movie } from '../../types';
import { RESULT_STATUS } from '../../enums';

type matchType = { params: { query: string } };
type ResultsProps = {
  match: matchType,
  results: Array<Movie>,
  backgroundLoaded: boolean,
  onLoadBackground: () => void,
  onLoadResults: (query: string) => void,
  status: string,
}

function Results(props: ResultsProps) {
  const {
    match,
    results,
    backgroundLoaded,
    status,
    onLoadResults,
    onLoadBackground,
  } = props;

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      await Promise.all([
        onLoadBackground(),
        onLoadResults(match.params.query),
      ]);
    };
    initialize();
  }, []);

  const resultsLoaded = results && results.length;

  // Divide the results array in two, for filling the two sliders
  const half = Math.ceil(results.length / 2);

  const [firstSliderSource, secondSliderSource] = chunk(results, half);

  debugger;
  return (
    <React.Fragment>
      {
        backgroundLoaded
          ?
          <React.Fragment>
            <Header showBack={true} />
            <StyledResultsWrapper>
              {
                status === RESULT_STATUS.INPUT && (results && results.length === 0) ?
                    <NoResults />
                  :
                  (
                    <Zoom when={resultsLoaded}>
                      <Carousel source={firstSliderSource} />
                      <Carousel source={secondSliderSource} />
                    </Zoom>
                  )
              }
            </StyledResultsWrapper>
          </React.Fragment>
          :
          null
      }
    </React.Fragment >
  );
}

export default Results;
