const $cardAdvantage = $('.js-card-advantage');

$cardAdvantage.hover(
  function() {
    $(this).children('.card-advantage__front').addClass('is-hidden');
    $(this).children('.card-advantage__back').addClass('is-visible');
  },
  function() {
    $(this).children('.card-advantage__front').removeClass('is-hidden');
    $(this).children('.card-advantage__back').removeClass('is-visible');
  }
);

