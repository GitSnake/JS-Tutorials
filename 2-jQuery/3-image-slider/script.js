'use strict';

$(function(){
  // script variables
  let width = 720;
  let animationSpeed = 1000;
  let pause = 1000;
  let currentSlide = 1;

  // cache DOM
  let $slider = $('#slider');
  let $slideContainer = $slider.find('.slides');
  let $slides = $slideContainer.find('slide');

  //setInterval
  setInterval(function(){
    $sliderContainer.animate({'margin-left': '-=' + width + 'px'}, animationSpeed, function(){
      currentSlide++;
      if(currentSlide === $slides.length){
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  }, pause);

  //listen for mouseenter and pause
  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

  //resume of mouseleave

});
