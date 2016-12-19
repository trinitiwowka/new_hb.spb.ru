<?php

		$headers= "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: <info@mydefend.pro>\r\n";
		$send="Shafigalov@gmail.com";
		$message;

		$name = $_POST['name'];
		$color = $_POST['color'];
		$size = $_POST['size'];
		$price = $_POST['price'];
		$amount = $_POST['amount'];

		foreach( $name as $key => $n ) {
		$message.="name :".$n.
		"<br>color : ".$color[$key].
		"<br>size :".$size[$key].
		"<br>price :".$price[$key].
		"<br>amount :".$amount[$key]."<br><hr><br>";
		}
		$message.="Итого: ".$_POST["resultPrice"]."руб<br>".
		"Телефон: ".$_POST["phone"];
		mail ($send,
		"сообщение - с ".$_SERVER['HTTP_REFERER'],
		$message, $headers);

		?>