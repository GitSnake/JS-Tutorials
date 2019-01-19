'use strict';

$(function(){
  // script variables
  let width = 720;
  let animationSpeed = 1000;
  let pause = 3000;
  let currentSlide = 1;

  // cache DOM
  let $slider = $('#slider');
  let $slideContainer = $slider.find('.slides');
  let $slides = $slideContainer.find('slide');

  //setInterval
  setInterval(function(){
    $sliderContainer.animate({'margin-left': '-=' + width + 'px'}, animationSpeed, function(){
      d
    });
  }, pause);
    //animate margin-left
      //if it's last slide, go to position 1 (0px);

      //listen for mouseenter and pause
      //resume of mouseleave
});
