$('.open-popup').click(function (e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});

$('.popup-bg').click(function (e) {
  if (!$(e.target).closest(".popup").length) {
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
  }
});

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

// document.querySelector('.slider-next').addEventListener('click', function () {
//   offset = offset + 711;
//   if (offset > 2133) {
//     offset = 0
//   }
//   sliderLine.style.left = -offset + 'px'
// });

// document.querySelector('.slider-prev').addEventListener('click', function () {
//   offset = offset - 711;
//   if (offset < 0) {
//     offset = 2133
//   }
//   sliderLine.style.left = -offset + 'px'
// });

// const price = document.querySelector('.price');

document.querySelector('.first-price').addEventListener('click', function () {
  document.querySelector('.price').textContent = '150';
});

document.querySelector('.second-price').addEventListener('click', function () {
  document.querySelector('.price').textContent = '200';
});

document.querySelector('.third-price').addEventListener('click', function () {
  document.querySelector('.price').textContent = '250';
});

document.querySelector('.four-price').addEventListener('click', function () {
  document.querySelector('.price').textContent = '300';
});

$('.size-price').click(function () {
  $('.size-price').removeClass('active');
  $(this).addClass('active');
})