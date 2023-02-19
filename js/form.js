jQuery(document).ready(function () {
    jQuery(".header-form").submit(function () { // Событие отправки с формы
        let name = $('#header-name').val().trim(); // Собираем данные из полей
        let phone = $('#header-phone').val().trim(); // Собираем данные из полей
        if (name == "") {
            $('#errorMess').text("Заполните все поля!");
            return false;
        } else if (phone == "") {
            $('#errorMess').text("Заполните все поля!");
            return false;
        } else if (phone.length < 5) {
            $('#errorMess').text("Введите настоящий номер!");
            return false
        } else {
            $('#errorMess').text("");
        }

        jQuery.ajax({
            type: "POST", // Метод отправки
            url: "../sendform.php", // Путь к PHP обработчику sendform.php
            cache: false,
            data: { 'name': name, 'phone': phone },
            success: swal({
                title: "С вами свяжутся в скором времени!",
                type: "success",
                showConfirmButton: true,
                timer: 3000
            })
        });
        $(this).find('input, textarea').prop('disabled', true);
        $(this).find('button').prop('disabled', true).html('Готово!').css({ "background": "#428770", "cursor": "auto" });
        event.preventDefault();
    });
});

jQuery(document).ready(function () {
    jQuery(".table-form").submit(function () { // Событие отправки с формы
        let name = $('#table-name').val().trim(); // Собираем данные из полей
        let phone = $('#table-phone').val().trim(); // Собираем данные из полей
        let table = document.querySelector(".table").textContent;
        let size = document.querySelector("#size_active").textContent;
        let color = document.querySelector("#color_active").getAttribute("data-color");
        let number = document.querySelector(".buy2").textContent;
        let price = document.querySelector(".price").textContent;
        let priceTwo = document.querySelector(".buy3").textContent;

        if ((name == "") && (phone == "")) {
            $('#errorMessTable').text("Заполните все поля!");
            $('#table-name').css("border", "1px solid #ff0000");
            $('#table-phone').css("border", "1px solid #ff0000");
            return false;
        } else if (name == "") {
            $('#table-name').css("border", "1px solid #000");
            $('#table-phone').css("border", "1px solid #000");
            $('#errorMessTable').text("Напишите имя!");
            $('#table-name').css("border", "1px solid #ff0000");
            return false;
        } else if (phone == "") {
            $('#table-name').css("border", "1px solid #000");
            $('#table-phone').css("border", "1px solid #000");
            $('#errorMessTable').text("Напишите номер телефона!");
            $('#table-phone').css("border", "1px solid #ff0000");
            return false;
        } else if (phone.length < 5) {
            $('#table-name').css("border", "1px solid #000");
            $('#table-phone').css("border", "1px solid #000");
            $('#errorMessTable').text("Введите настоящий номер!");
            $('#table-phone').css("border", "1px solid #ff0000");
            return false
        } else {
            $('#table-name').css("border", "1px solid #000");
            $('#table-phone').css("border", "1px solid #000");
            $('#errorMessTable').text("");
        }

        jQuery.ajax({
            type: "POST", // Метод отправки
            url: "../sendform.php", // Путь к PHP обработчику sendform.php
            cache: false,
            data: { 'name': name, 'phone': phone, 'table': table, 'size': size, 'color': color, 'number': number, 'price': price, 'priceTwo': priceTwo },
            success: swal({
                title: "С вами свяжутся в скором времени!",
                type: "success",
                showConfirmButton: true,
                timer: 3000
            })
        });
        $(this).find('input, textarea').prop('disabled', true);
        $(this).find('.popup-shop-button').prop('disabled', true).html('Готово!').css({ "background": "#428770", "cursor": "auto" });
        event.preventDefault();
    });
});