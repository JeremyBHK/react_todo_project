import React from 'react';
import ReactSwipe from 'react-swipe';

const Swiper = (props) => {
//   let reactSwipeEl;
//
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false}}
        // style = {{child: {child: {width: '30%'}}}}
        // ref={el => (reactSwipeEl = el)}
      >
        <div className="swipe-elem">{props.task}</div>
        <div className="swipe-elem">{props.task1}</div>
        <div className="swipe-elem">{props.task2}</div>
      </ReactSwipe>
    </div>
  );
};

export default Swiper
