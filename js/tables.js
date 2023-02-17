function reloadScript(url) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.documentElement.appendChild(script);
};


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

jQuery(document).ready(function () {
    jQuery(".buy__button").click(function () {
        let size = document.querySelector("#size_active").textContent;
        let color = document.querySelector("#color_active").cloneNode(true);
        let price = document.querySelector(".price").textContent;
        color.style.cursor = 'auto';
        color.setAttribute("disabled", "disabled");
        color.classList.remove('active');

        $(".buy").html(size);
        $(".buy1").html(color);
        $(".buy2").html(price);

    })
})
// let size = document.querySelector("#size_active").textContent;
// let color = document.querySelector("#color_active").getAttribute("data-color");
// let color = document.querySelector("#color_active").cloneNode(true);
// color.style.cursor = 'auto';
// color.classList.remove('active');

// $(".buy").html(size);
// $(".buy1").html(color);


