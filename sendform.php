<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$table = $_POST['table']; 
$size = $_POST['size'];
$color = $_POST['color'];
$number = $_POST['number'];
$price = $_POST['price'];
$priceTwo = $_POST['priceTwo'];


$token = "5841049373:AAG9vb-v9WBRkytDW9O3lvXczYT1X6Ez-A8"; // Тут пишем токен
$chat_id = "-1001715924234"; // Тут пишем ID группы, куда будут отправляться сообщения

$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Название стола: ' => $table,
  'Размер: ' => $size,
  'Цвет: ' => $color,
  'Количество: ' => $number,
  'Цена 1шт: ' => $price,
  'Итого: ' => $priceTwo
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>