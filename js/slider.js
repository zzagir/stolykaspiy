const img = document.querySelector('.blockWbg');
const chislo = document.querySelector('.chislo');
i = 1
chislo.innerHTML = i + "/" + maxPhoto

document.querySelector('.btn1').addEventListener('click', function () {
    if (i < 2) {
        i = maxPhoto
        img.style.backgroundImage = "url(img/tables/" + tablePhoto + "/" + i + ".jpg)";
    } else {
        i--
        img.style.backgroundImage = "url(img/tables/" + tablePhoto + "/" + i + ".jpg)";
    }
    chislo.innerHTML = i + "/" + maxPhoto
});

document.querySelector('.btn2').addEventListener('click', function () {
    if (i > maxPhoto - 1) {
        i = 1
        img.style.backgroundImage = "url(img/tables/" + tablePhoto + "/" + i + ".jpg)";
    } else {
        i++
        img.style.backgroundImage = "url(img/tables/" + tablePhoto + "/" + i + ".jpg)";
    }
    chislo.innerHTML = i + "/" + maxPhoto
});

const img1 = document.querySelector('.blockWbg1');
const chislo1 = document.querySelector('.chislo1');
j = 1

document.querySelector('.btn3').addEventListener('click', function () {
    if (j < 2) {
        j = 6
        img1.style.backgroundImage = "url(img/tables/" + tablePhoto + "/" + j + ".jpg)";
    } else {
        j--
        img1.style.backgroundImage = "url(img/tables/" + tablePhoto + "/" + j + ".jpg)";
    }
    chislo1.innerHTML = j + "/" + maxPhoto
});

document.querySelector('.btn4').addEventListener('click', function () {
    if (j > maxPhoto - 1) {
        j = 1
        img1.style.backgroundImage = "url(img/tables/" + tablePhoto + "/" + j + ".jpg)";
    } else {
        j++
        img1.style.backgroundImage = "url(img/tables/" + tablePhoto + "/" + j + ".jpg)";
    }
    chislo1.innerHTML = j + "/" + maxPhoto
});

$('.blockWbg').click(function () {
    $('.slider-popup-bg').fadeIn(400);
    $('html').addClass('no-scroll');
    chislo1.innerHTML = j + "/" + maxPhoto
});

$('.slider-close-popup').click(function () {
    $('.slider-popup-bg').fadeOut(400);
    $('html').removeClass('no-scroll');
});
