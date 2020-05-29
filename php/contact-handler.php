<?php
$errors = '';
$myemail = 'sandra@revoltwind.com,steve@revoltwind.com';

if(empty($_POST['name'])  ||
   empty($_POST['email']))
{
    $errors .= "\n Error: Please fill out all of the form fields";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$contact = $_POST['contactMethod'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail;
	$email_subject = "CONTACT FORM: $name";
	$email_body = "You have received a message from the CONTACT page. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Message: $message \n Phone:  $phone \n Contact by: $contact";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";

	mail($to,$email_subject,$email_body,$headers);
	//redirect
  // header('Location: https://revoltwind.com/thankyou.html');
  header('Location: https://revoltwind.com/contact.html?q=thankyou');
  exit();

}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>
