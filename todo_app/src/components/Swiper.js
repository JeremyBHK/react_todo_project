import React from 'react';
import ReactSwipe from 'react-swipe';
import Task from './tasks/Task';

const Swiper = () => {
//   let reactSwipeEl;
//
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        // ref={el => (reactSwipeEl = el)}
      >
        <div><Task /></div>
        <div><Task /></div>
        <div><Task /></div>
      </ReactSwipe>
    </div>
  );
};

export default Swiper
