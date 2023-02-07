jQuery(document).ready(function () {
    jQuery("form").submit(function () { // Событие отправки с формы
        let form_data = jQuery(this).serialize(); // Собираем данные из полей
        jQuery.ajax({
            type: "POST", // Метод отправки
            url: "../sendform.php", // Путь к PHP обработчику sendform.php
            data: form_data,
            success: swal({
                title: "С вами свяжутся в скором времени!",
                type: "success",
                showConfirmButton: true,
                timer: 3000
            })
        });
        $(this).find('input, textarea').prop('disabled', true);
        event.preventDefault();
    });
});