'use strict';
document.addEventListener('DOMContentLoaded', function () {

  // Main Home Page main_slide
  var swiper = new Swiper(".mainSlide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


  // Main Home Page gallery Menu Slide
  var swiper = new Swiper(".galleryMenuSlide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchSlidesProgress: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

});