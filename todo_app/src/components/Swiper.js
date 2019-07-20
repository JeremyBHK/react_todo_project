import React from 'react';
import ReactSwipe from 'react-swipe';
// import Task from './tasks/Task';

const Swiper = (props) => {
//   let reactSwipeEl;
//
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        // ref={el => (reactSwipeEl = el)}
      >
        <div>{props.task}</div>
        <div>{props.task}</div>
        <div>{props.task}</div>
      </ReactSwipe>
    </div>
  );
};

export default Swiper
