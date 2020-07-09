import React from 'react';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import Header from '../header';
import Card from '../card';
import { StyledResultsContainer, StyledArrow, StyledPage } from './styled';

function Results() {
  const page = (
    <StyledPage>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledPage>
  );

  const CarouselUI = ({ position, handleClick, children }) => <StyledResultsContainer>
    {children}
    <StyledArrow onClick={handleClick} data-position={position - 1}>{'<'}</StyledArrow>
      <StyledArrow right onClick={handleClick} data-position={position + 1}>{'>'}</StyledArrow>
    </StyledResultsContainer>;
  const Carousel = makeCarousel(CarouselUI);

  return (

    <React.Fragment>
      <Header />
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
    </React.Fragment>
  );
}

export default Results;
