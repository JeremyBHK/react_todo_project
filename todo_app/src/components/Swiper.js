import React from 'react';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom'

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
        <div><Link to="/accept-task" title="Lien vers la page task" id="link-switch">{props.task}</Link></div>
        <div><Link to="/accept-task" title="Lien vers la page task" id="link-switch">{props.task}</Link></div>
        <div><Link to="/accept-task" title="Lien vers la page task" id="link-switch">{props.task}</Link></div>
        
      </ReactSwipe>
    </div>
  );
};

export default Swiper
