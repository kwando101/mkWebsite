<?php

if(isset($_POST['submit'])) {
  $firstName = $_POST['fname'];
  $lastName = $_POST['lname'];
  $eMail = $_POST['eMail'];
  $Number = $_POST['number'];
  $message = $_POST['message'];

  $mailTo = "kwanmah@mk.alpha.co.kr";
  $headers = "From: ".$eMail";
  $txt = "You have recieved an e-mail from ".$firstName." ".$lastName."\n".$Number."\n\n".$message;


  mail($eMail, $txt, $headers);
}