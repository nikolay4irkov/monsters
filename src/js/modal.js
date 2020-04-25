const $modalClose = $('.js-modal-close');
const $modalCall = $('.js-modal-call');
const $modalBg = $('.js-modal-bg');


$modalClose.on('click', function () {
  $('.modal.is-open').removeClass('is-open');
  $modalBg.removeClass('is-open');

});

$modalCall.on('click', function (e) {
  e.preventDefault();
  let targetedModal = $(this).data('modal-target');

  $(`#${targetedModal}`).addClass('is-open');
  $modalBg.addClass('is-open');

});


