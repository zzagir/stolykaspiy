let price = document.querySelector('.price')

document.querySelector('.first-price').addEventListener('click', function () {
    price.textContent = '150 000₽';
});

document.querySelector('.second-price').addEventListener('click', function () {
    price.textContent = '200 000₽';
});

document.querySelector('.third-price').addEventListener('click', function () {
    price.textContent = '250 000₽';
});

document.querySelector('.fourth-price').addEventListener('click', function () {
    price.textContent = '300 000₽';
});

$('.size-price').click(function () {
    $('.size-price').removeClass('active');
    $(this).addClass('active');
})

$('.size-color').click(function () {
    $('.size-color').removeClass('active');
    $(this).addClass('active');
})