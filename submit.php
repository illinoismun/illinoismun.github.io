<?php
if(!isset($_POST['submit'])) {
    echo "Error, you need to submit the form!";
}
$name = $_POST['name'];
$vemail = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['message'];
if(empty($name) || empty($vemail)) {
    echo "Name and email are mandatory!";
    exit;
}

$email_from = 'tech@illinoismun.org';
$email_subject = 'URGENT: New Message on MUNI Contact Form';
$email_body = "You have received a new message from $name.\n Email Address: $vemail \n Subject: $subject \n Message: \n $msg";
$to = 'tech@illinoismun.org';
$headers = "From: $email_from \r\n";
mail($to, $email_from, $email_body, $headers);