$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.popup-bg').click(function (e) {
  if (!$(e.target).closest(".popup").length) {
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
  }
});