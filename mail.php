<?php

  $picture = "";

  // Закачиваем файл

  $path = "files/1.pdf";

  $picture = $path;

  $thm = "тема письма";

  $msg = "Текст сообщения";

  $mail_to = $_POST['email'];

  // Отправляем почтовое сообщение 
  if(empty($picture)) mail($mail_to, $thm, $msg); 
  else send_mail($mail_to, $thm, $msg, $picture); 
  // Вспомогательная функция для отправки почтового сообщения с вложением (Trianon)
  function send_mail($mail_to, $thema, $html, $path)   
  { if ($path) {  
    $fp = fopen($path,"rb");   
    if (!$fp)   
    { print "Cannot open file";   
      exit();   
    }   
    $file = fread($fp, filesize($path));   
    fclose($fp);   
    }  
    $name = "1.pdf"; // в этой переменной надо сформировать имя файла (без всякого пути)  
    $EOL = "\r\n"; // ограничитель строк, некоторые почтовые сервера требуют \n - подобрать опытным путём
    $boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.  
    $headers    = "MIME-Version: 1.0;$EOL";   
    $headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL";  
    $headers   .= "From: address@server.com";  
      
    $multipart  = "--$boundary$EOL";   
    $multipart .= "Content-Type: text/html; charset=utf-8$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом html-части 
    $multipart .= chunk_split(base64_encode($html));   

    $multipart .=  "$EOL--$boundary$EOL";   
    $multipart .= "Content-Type: application/octet-stream; name=\"$name\"$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= "Content-Disposition: attachment; filename=\"$name\"$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла 
    $multipart .= chunk_split(base64_encode($file));   

    $multipart .= "$EOL--$boundary--$EOL";   
      
        if(!mail($mail_to, $thema, $multipart, $headers))   
         {return False;           //если не письмо не отправлено
      }  
    else { //// если письмо отправлено
    return True;  
    }  
  exit;  
  }
?>