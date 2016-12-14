<?php

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <info@mydefend.pro>\r\n";
  mail ("trinitiwowka@gmail.com",
        "сообщение - с ".$_SERVER['HTTP_REFERER'],
        "<br>Имя: ".$_POST['name'].
		"<br>Телефон: ".$_POST['phone'], $headers); 

 ?>