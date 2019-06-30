<?
$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = "Playa Taco email form";
$formcontent="From: $fname $lname\n Message: $message";
$recipient = "ja.glez74@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error, something went wrong!");
echo "Thank You we will stay in touch!";
?>