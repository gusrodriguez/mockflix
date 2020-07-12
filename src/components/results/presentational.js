import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import Zoom from 'react-reveal/Zoom';
import debounce from 'lodash.debounce';
import Header from '../header';
import Card from '../card';
import {
  StyledResultsContainer,
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
  const resultsLoaded = results && results.length;
  const cardWidth = 350;
  const availableWidth = width - 16;
  const cardsNumber = Math.floor(availableWidth / cardWidth);
  const cards = [];

  for (let i = 0; i < cardsNumber; i++) {
    cards.push(<Card source={resultsLoaded && results[0].imgSource} key={`card_${i + 1}`} />);
  }

  const page = (
    <StyledPage>
      {cards}
    </StyledPage>
  );

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
            <Slide right>
              {page}
            </Slide>
            <Slide right>
              {page}
            </Slide>
            <Slide right>
              {page}
            </Slide>
          </Carousel>
          <Carousel defaultWait={0}>
            <Slide right>
              {page}
            </Slide>
            <Slide right>
              {page}
            </Slide>
            <Slide right>
              {page}
            </Slide>
          </Carousel>
        </Zoom>
      </StyledResultsWrapper>
    </React.Fragment>
  );
}

export default Results;
