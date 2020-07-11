import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import Zoom from 'react-reveal/Zoom';
import debounce from 'lodash.debounce';
import Header from '../header';
import Card from '../card';
import {
  StyledResultsContainer,
  StyledLeftArrow,
  StyledRightArrow,
  StyledPage,
} from './styled';

function Results() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isLoading, setLoading] = useState(true);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(updateWidthAndHeight, 500));
    setTimeout(() => setLoading(false), 1000);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  // Calculate how many slides will fit per page depending on the viewport width
  const cardWidth = 350;
  const availableWidth = width - 16;
  const cardsNumber = Math.floor(availableWidth / cardWidth);
  const cards = [];

  for (let i = 0; i < cardsNumber; i++) {
    cards.push(<Card key={`card_${i+1}`} />);
  }

  const page = (
    <StyledPage>
     {cards}
    </StyledPage>
  );

  const CarouselUI = ({ position, handleClick, children }) => <StyledResultsContainer width={cardsNumber * cardWidth}>
    {children}
    <StyledLeftArrow onClick={handleClick} data-position={position - 1}>{'<'}</StyledLeftArrow>
    <StyledRightArrow onClick={handleClick} data-position={position + 1}>{'>'}</StyledRightArrow>
    </StyledResultsContainer>;

  const Carousel = makeCarousel(CarouselUI);

  return (
    <React.Fragment>
      <Header />
      <Zoom when={!isLoading}ß>
        <Carousel defaultWait={0}>
          <Slide right>
            {page}
          </Slide>
          <Slide right>
            {page}
          </Slide>
          <Slide  right>
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
          <Slide  right>
            {page}
          </Slide>
        </Carousel>
        </Zoom>
    </React.Fragment>
  );
}

export default Results;
