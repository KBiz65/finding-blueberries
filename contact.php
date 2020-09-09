<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $send_to = "kevin@findingblueberries.com";
  $send_from = "kevin@findingblueberries.com";
  $email_subject = $subject;
  $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                    "User Message: $message.\n";
  $headers = "From: $send_from" . "\r\n" . "Reply-To: $visitor_email" . "\r\n";

  $a = mail($send_to,$email_subject,$email_body,$headers);
  if ($a) 
  {
    print("Message was sent, thank you!");
  } else {
    print("Message not sent. Please try again.");
  }
  header("Location: index.html");
?>