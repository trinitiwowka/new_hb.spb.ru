<?php

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <info@mydefend.pro>\r\n";

  mail ("kashirin1242@gmail.com",
        "сообщение - с ".$_SERVER['HTTP_REFERER'],
        "<br>Товар: ".$_POST['name'].
        "<br>Цвет: ".$_POST['color'].
        "<br>Размер: ".$_POST['size'].
        "<br>Цена: ".$_POST['price'].
		"<br>Количество: ".$_POST['amount'], $headers);

 ?>