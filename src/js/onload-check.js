$(document).ready(function() {
  setTimeout(() => {
    $('.p').addClass('is-loaded');
  }, 500);

  setTimeout(() => {
    $('main').addClass('is-loaded');
  }, 700);
});
