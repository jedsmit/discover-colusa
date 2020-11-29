import React from 'react';
import Carousel from 'react-multi-carousel';

import { Container } from '@material-ui/core';

import PhotoCard from './PhotoCard';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PhotoCarousel = props => {
  return (
    <Container disableGutters>
      <Carousel responsive={responsive}>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 1
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 2
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 3
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 4
        </div>
      </Carousel>
      <Carousel responsive={responsive}>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 1
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 2
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 3
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 4
        </div>
      </Carousel>
      <Carousel responsive={responsive}>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 1
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 2
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 3
        </div>
        <div>
          <img src='https://picsum.photos/400' alt='placeholder'></img>Item 4
        </div>
      </Carousel>
      ;
    </Container>
  );
};

export default PhotoCarousel;
