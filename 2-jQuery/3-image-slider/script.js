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

  // Interval variables and functions (startSlider)
  let interval;

  function startSlider(){
    //setInterval
    interval = setInterval(function(){
      $sliderContainer.animate({'margin-left': '-=' + width + 'px'}, animationSpeed, function(){
        currentSlide++;
        if(currentSlide === $slides.length){
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

function stopSlider() {
  clearInterval(interval);
}

  //listen for mouseenter and stopSlider
  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

  //resume of mouseleave
  startSlider();

});
