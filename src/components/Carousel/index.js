import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProgressiveImage from 'react-progressive-image';
import { CarouselContainer, Slide } from './style';
import History from './History';

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const [isNext, setIsNext] = useState(true);

  const onGoToHistoryClick = index => {
    setIsNext(current < index);
    setCurrent(index);
  };

  const onGoToPrev = () => onGoToHistoryClick(current > 0 ? current - 1 : 0);

  const onGoToNext = () =>
    onGoToHistoryClick(
      current < items.length - 1 ? current + 1 : items.length - 1
    );

  return (
    <CarouselContainer>
      <ReactCSSTransitionGroup
        transitionName={{
          enter: isNext ? 'enter-next' : 'enter-prev',
          enterActive: 'enter-active',
          leave: 'leave',
          leaveActive: isNext ? 'leave-active-next' : 'leave-active-prev',
        }}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <Slide key={current}>
          {/* <Left onClick={onGoToPrev} /> */}
          <ProgressiveImage src={items[current]}>
            {(src, loading) =>
              loading ? 'LOADING...' : <img src={src} alt="apartment_image" />
            }
          </ProgressiveImage>
          {/* <Right onClick={onGoToNext} /> */}
        </Slide>
      </ReactCSSTransitionGroup>
      <History
        current={current}
        items={items}
        onChangeSlide={onGoToHistoryClick}
        onGoToPrev={onGoToPrev}
        onGoToNext={onGoToNext}
      />
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Carousel;
