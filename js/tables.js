let price = document.querySelector('.price');

$('.size-price').click(function () {
    $('.size-price').removeClass('active');
    $('.size-price').attr('id', '');
    $(this).addClass('active');
    $(this).attr('id', 'size_active');
});

$('.size-color').click(function () {
    $('.size-color').removeClass('active');
    $('.size-color').attr('id', '');
    $(this).addClass('active');
    $(this).attr('id', 'color_active');
});

$('.open-popup-shop').click(function (e) {
    e.preventDefault();
    $('.popup-shop-bg').fadeIn(400);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
    $('.popup-shop-bg').fadeOut(400);
    $('html').removeClass('no-scroll');
});

$('.popup-shop-bg').click(function (e) {
    if (!$(e.target).closest(".popup-shop").length) {
        $('.popup-shop-bg').fadeOut(600);
        $('html').removeClass('no-scroll');
    }
});

let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let countTwo = document.getElementById("num");

let number = document.querySelector("#buttonCountNumber").textContent;
number = Number(number)


buttonCountPlus.onclick = function () {
    if (number <= 49) {
        number++;
        count.innerHTML = number;
    }
};

buttonCountMinus.onclick = function () {
    if (number >= 2) {
        number--;
        count.innerHTML = number;
    }
};

$(".buy__button").click(function () {
    let size = document.querySelector("#size_active").textContent;
    let color = document.querySelector("#color_active").cloneNode(true);
    let price = document.querySelector('.price').textContent;

    priceOne = price.replace(" ", "").replace("₽", "");
    count.innerHTML = number;
    countTwo.value = number * priceOne;
    let priceTwo = countTwo.value;
    priceTwo = Number(priceTwo)
    priceTwo = priceTwo.toLocaleString("de-DE");
    priceTwo = priceTwo + "₽";

    color.style.cursor = 'auto';
    color.setAttribute("disabled", "disabled");
    color.classList.remove('active');
    $(".buy").html(size);
    $(".buy1").html(color);
    $(".buy2").html(number);
    $(".buy3").html(priceTwo);
});
