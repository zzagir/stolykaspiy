function reloadScript(url) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.documentElement.appendChild(script);
}


let price = document.querySelector('.price');
$('.first-price').click(function () {
    price.textContent = '150 000₽';
});
$('.second-price').click(function () {
    price.textContent = '200 000₽';
});
$('.third-price').click(function () {
    price.textContent = '250 000₽';
});
$('.fourth-price').click(function () {
    price.textContent = '300 000₽';
});


$('.size-price').click(function () {
    $('.size-price').removeClass('active');
    $(this).addClass('active');
});

$('.size-color').click(function () {
    $('.size-color').removeClass('active');
    $(this).addClass('active');
});

$('.first-color').click(function () {
    $('.slider-fotorama').html('<div class="fotorama" data-width="611" data-height="370" data-allowfullscreen="true" data-loop="true" data-arrows="always" style="background-color: white; border-radius: 10px;" data-nav="thumbs"><img src="img/11.jpg"><img src="img/22.jpg"><img src="img/33.jpg"><img src="img/44.jpg"></div>');
    reloadScript('js/fotorama.js');
});

$('.second-color').click(function () {
    $('.slider-fotorama').html('<div class="fotorama" data-width="611" data-height="370" data-allowfullscreen="true" data-loop="true" data-arrows="always" style="background-color: white; border-radius: 10px;" data-nav="thumbs"><img src="img/1.jpg"><img src="img/2.jpg"><img src="img/3.jpg"><img src="img/4.jpg"></div>');
    reloadScript('js/fotorama.js');
});

$('.open-popup-shop').click(function (e) {
    e.preventDefault();
    $('.popup-shop-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
    $('.popup-shop-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.popup-shop-bg').click(function (e) {
    if (!$(e.target).closest(".popup-shop").length) {
        $('.popup-shop-bg').fadeOut(600);
        $('html').removeClass('no-scroll');
    }
});
