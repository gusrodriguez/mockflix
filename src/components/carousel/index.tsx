import React, { useState, useEffect, ReactElement } from 'react';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import debounce from 'lodash.debounce';
import chunk from 'lodash/chunk';
import uniqueId from 'lodash/uniqueId'
import Card from '../card';
import {
  StyledCarouselContainer,
  StyledPage,
  StyledLeftArrow,
  StyledRightArrow,
} from './styled';
import LeftArrow from '../arrows/left';
import RightArrow from '../arrows/right';
import { DEFAULT_CARD_WIDTH, CARD_SEPARATION } from './constants';
import { Movie } from '../../types';

type CarouselProps = {
  source: Array<Movie>,
}

type CarouselUIProps = {
  position: number,
  handleClick: () => void,
  children: ReactElement,
}

function Carousel(props: CarouselProps) {
  const [width, setWidth] = useState(window.innerWidth);
  const [, setHeight] = useState(window.innerHeight);
  const { source } = props;

  const updateWidthAndHeight = (e: UIEvent) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // subscribe to resize
    // @ts-ignore
    window.addEventListener("resize", debounce(updateWidthAndHeight, 500));

    // on unmount, deattach event listener
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  // Calculate how many slides will fit per page depending on the viewport width
  const cardWidth = DEFAULT_CARD_WIDTH;
  const availableWidth = width - CARD_SEPARATION;
  const cardsNumber = Math.floor(availableWidth / cardWidth);

  const sourceLoaded = source && source.length;
  let slides: Array<JSX.Element> = [];

  if (sourceLoaded) {
    // Map the source to cards components
    const allCards = source.map(
      (element, index) =>
        <Card image={element.imgSource} key={`card_${uniqueId()}`} />
    );

    const pages = chunk(allCards, cardsNumber);

    // Balance the last page with placeholders
    const lastPage = pages[pages.length - 1];
    if (lastPage.length < cardsNumber) {
      const gap = cardsNumber - lastPage.length;
      for (let i = 0; i < gap; i++) {
        lastPage.push(<Card key={`card_${uniqueId()}`} />)
      }
    }

    // Map the pages to slides components
    slides = pages.map(page => (
      <Slide key={uniqueId()} right>
        <StyledPage>
          {page}
        </StyledPage>
      </Slide>
    ));
  }

  const CarouselUI = ({ position, handleClick, children }: CarouselUIProps) => (
    <StyledCarouselContainer width={cardsNumber * cardWidth}>
      {children}
      <StyledLeftArrow onClick={handleClick} data-position={position - 1}><LeftArrow /></StyledLeftArrow>
      <StyledRightArrow onClick={handleClick} data-position={position + 1}><RightArrow /></StyledRightArrow>
    </StyledCarouselContainer>
  );

  const Carousel = makeCarousel(CarouselUI);

  return (
    <Carousel defaultWait={0}>
      {slides}
    </Carousel>
  );
}

export default Carousel;
