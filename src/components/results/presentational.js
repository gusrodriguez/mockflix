import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import Zoom from 'react-reveal/Zoom';
import debounce from 'lodash.debounce';
import chunk from 'lodash/chunk';
import uniqueId from 'lodash/uniqueId';
import Header from '../header';
import Card from '../card';
import {
  StyledResultsWrapper,
  StyledCarouselContainer,
  StyledLeftArrow,
  StyledRightArrow,
  StyledPage,
} from './styled';
import { StyledLockUI } from '../lock-ui/styled';
import LeftArrow from '../arrows/left';
import RightArrow from '../arrows/right';

function Results(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const { onLoadResults, results } = props;

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // subscribe to resize
    window.addEventListener("resize", debounce(updateWidthAndHeight, 500));

    // data fetch
    const fetchData = async () => {
      await onLoadResults();
    };
    fetchData();

    // on unmount, deattach event listener
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  // Calculate how many slides will fit per page depending on the viewport width
  const cardWidth = 350;
  const availableWidth = width - 16;
  const cardsNumber = Math.floor(availableWidth / cardWidth);

  const resultsLoaded = results && results.length;

  const pages = [];
  let slides1;
  let slides2;


  if (resultsLoaded) {
    //const lalala = results.map(result => { console.log(" >> ", result.imgSource)});
    const allSlides = results.map((result, index) => <Card source={result.imgSource} key={`card_${index}`} />)

    // Divide the results array in two, for filling the two sliders
    const half = Math.ceil(allSlides.length / 2);
    const [firstSliderSource, secondSliderSource] = chunk(allSlides, half);

    // Divide the source in pages
    const pagesSource1 = chunk(firstSliderSource, cardsNumber);

    // Set the pages component
    slides1 = pagesSource1.map(page => (
      <Slide key={uniqueId()} right>
        <StyledPage>
          {page}
        </StyledPage>
      </Slide>
    ));

    // Divide the source in pages
    const pagesSource2 = chunk(secondSliderSource, cardsNumber);

    // Set the pages component
    slides2 = pagesSource2.map(page => (
      <Slide key={uniqueId()} right>
        <StyledPage>
          {page}
        </StyledPage>
      </Slide>
    ));
  }

  const CarouselUI = ({ position, handleClick, children }) => (
    <StyledCarouselContainer width={cardsNumber * cardWidth}>
      {children}
      <StyledLeftArrow onClick={handleClick} data-position={position - 1}><LeftArrow /></StyledLeftArrow>
      <StyledRightArrow onClick={handleClick} data-position={position + 1}><RightArrow /></StyledRightArrow>
    </StyledCarouselContainer>
  );

  const Carousel = makeCarousel(CarouselUI);

  return (
    <React.Fragment>
      <Header />
      <StyledResultsWrapper>
        <Zoom when={resultsLoaded}>
          <Carousel defaultWait={0}>
            {slides1}
          </Carousel>
          <Carousel defaultWait={0}>
            {slides2}
          </Carousel>
        </Zoom>
      </StyledResultsWrapper>
    </React.Fragment>
  );
}

export default Results;
