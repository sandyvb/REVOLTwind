<?php
$errors = '';
$myemail = 'sandra@revoltwind.com';

if(empty($_POST['email'])){
    $errors .= "\n Error: A valid email address is required";
}

$email_address = $_POST['email'];
$message = $_POST['message'];
$rating = $_POST['rating'];
$firstVisit = $_POST['firstVisit'];


if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail;
	$email_subject = "COMMENTS FORM: $rating";
	$email_body = "You have received COMMENTS. ".
	" Here are the details:\n Email: $email_address \n Message: $message \n Rating:  $rating \n First Visit: $firstVisit";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";

	mail($to,$email_subject,$email_body,$headers);
	//redirect
	header('Location: https://revoltwind.com/hwt.html#summary');
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
