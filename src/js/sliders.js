import Swiper from 'swiper';
const $bannerSlider = $('.js-slider-banner');
const $partnersSlider = $('.js-slider-partners');
const $newsSlider = $('.js-slider-news');
const $historySlider = $('.js-slider-history');
const $reportsSlider = $('.js-slider-reports');

if ($bannerSlider.length) {
  const sliderBanner = new Swiper('.js-slider-banner', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 300,
    navigation: {
      nextEl: '.js-banner-next-arrow',
      prevEl: '.js-banner-prev-arrow',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
      renderBullet: function(index, className) {
        let slidesCount = $('.js-slider-banner').find('.swiper-slide').length;
        return `<span class="${className}">${index + 1}/${slidesCount}</span>`;
      },
    },
  });
}

if ($partnersSlider.length) {
  const sliderPartners = new Swiper('.js-slider-partners', {
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
        freeMode: false,
        navigation: {
          prevEl: '.js-partners-prev-arrow',
          nextEl: '.js-partners-next-arrow',
        },
      },
    },
  });
}

if ($newsSlider.length) {
  const sliderNews = new Swiper('.js-slider-news', {
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
}

if ($historySlider.length) {
  const sliderHistory = new Swiper('.js-slider-history', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 400,
    navigation: {
      nextEl: '.js-history-next-arrow',
      prevEl: '.js-history-prev-arrow',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
      // bulletClass: 'd-flex d-flex--align-center d-flex--space-center',
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
}

if ($reportsSlider.length) {
  const reportsSlider = new Swiper('.js-slider-reports', {
    autoHeight: true,
    spaceBetween: 20,
    freeMode: true,
    slidesPerView: 'auto',
    breakpoints: {
      1500: {
        slidesPerView: 5,
        freeMode: false,
      },
      1400: {
        slidesPerView: 4,
        freeMode: false,
      },
      768: {
        slidesPerView: 3,
        freeMode: false,
      },
    },
  });
}
