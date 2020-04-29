import Swiper from 'swiper';

$(document).ready(function() {
  if ($('.swiper-container--app').length) {
    let slider = new Swiper('.swiper-container--app', {
      slidesPerView: 1,
      loop: false,
      freeMode: false,
      spaceBetween: 30,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 2000,
      updateOnWindowResize: true,

      navigation: {
        nextEl: '.swiper-button-next--app',
        prevEl: '.swiper-button-prev--app',
      },
    });
  }

  if ($('.swiper-container--game').length) {
    let sliderGame = new Swiper('.swiper-container--game', {
      slidesPerView: 1,
      loop: false,
      freeMode: false,
      spaceBetween: 30,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 2000,
      /*autoHeight: true,*/
      updateOnWindowResize: true,
      pagination: {
        el: '.swiper-pagination--game',
        type: 'bullets',
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-button-next--game',
        prevEl: '.swiper-button-prev--game',
      },
    });
  }

});

/*
if ($('.swiper-container--app').length) {
  let slider = new Swiper('.swiper-container--app', {
    slidesPerView: 1,
    loop: false,
    freeMode: false,
    spaceBetween: 30,
    effect: 'fade',
    speed: 2000,
    updateOnWindowResize: true,

    navigation: {
      nextEl: '.swiper-button-next--app',
      prevEl: '.swiper-button-prev--app',
    },
  });
}

if ($('.swiper-container--game').length) {
  let sliderGame = new Swiper('.swiper-container--game', {
    slidesPerView: 1,
    loop: false,
    freeMode: false,
    spaceBetween: 30,
    effect: 'fade',
    speed: 2000,
    updateOnWindowResize: true,

    navigation: {
      nextEl: '.swiper-button-next--game',
      prevEl: '.swiper-button-prev--game',
    },
  });
}
*/
