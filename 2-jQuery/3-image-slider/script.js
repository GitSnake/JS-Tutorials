'use strict';

$(function(){
  // script variables
  let width = 720;
  let animationSpeed = 1000;
  let pause = 3000;

  // cache DOM
  let $slider = $('#slider');
  
  //setInterval
  setInterval(function(){
    $('#slider .slides').animate({'margin-left': '-=' + width + 'px'}, animationSpeed);
  }, pause);
    //animate margin-left
      //if it's last slide, go to position 1 (0px);

      //listen for mouseenter and pause
      //resume of mouseleave
});
