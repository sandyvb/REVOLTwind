<?php


if (empty($_POST['name']) && empty($_POST['email'])) die();

// SAVE FILE TO SERVER    
if(!empty($_FILES['resume'])) {        
    $path = "uploads/";
    $path = $path . basename($_FILES['resume']['name']);     
    move_uploaded_file($_FILES['resume']['tmp_name'], $path);
}
    
if ($_POST) {
    
    // VARS
    $name = $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    $interest = $_POST['interest'];
    $phone = $_POST['phone'];
    $contact = $_POST['contactMethod'];    
    $ip = $_SERVER['REMOTE_ADDR'];    
    
    
    $to = 'sandra@revoltwind.com';
    $subject = "JOB APPLICATION: $name";
    // $to = 'sandra@revoltwind.com,steve@revoltwind.com';
    
    // set response code - 200 OK
    http_response_code(200);
    
    // DATA
    $msg = "
    <html>
        <head>
            <title>REVOLT wind Job Application</title>
        </head>
        <body>
            <h1>JOB APPLICATION FROM $name</h1>
            <hr/>
            <p><b>Name: </b> $name</p>
            <p><b>Email: </b> $from</p>
            <p><b>Phone: </b> $phone</p>
            <p><b>Job Interest: </b> $interest</p>
            <p><b>Message: </b> $message</p>
            <p><b>Resume on server at: </b> $path</p>
            <p><b>Contact Method: </b> $contact</p>
            <hr/>
            <small>User's ip address: $ip</small> 
            <small><a href='https://www.plus2net.com/php_tutorial/php_ip-demo2.php'>click for more info</a></small>     
        </body>    
    </html>    
    ";
    
    $response_msg = "
    <html style='width: 800px; margin: 0 auto; background-color: grey'>
        <head>
            <title>REVOLT wind Job Application</title>
        </head>
        <body>            
            <h1>Thank you for sending your application to REVOLT Wind, $name!</h1>
            <hr/>
            <p>This is an automated response, but someone will get back to you shortly.</p>
            <p>Thanks again for applying and have a great day!<br/><i>Stephen Cowap</i><br/>REVOLT Hanging Wind Turbines<br/>636-448-3205</p>
            <img src='https://revoltwind.com/images/revolt_logo_ss.png' alt='logo' />
        </body>
    </html>
    ";
    
    // HEADERS
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: <" . $from . ">";

    $response_headers = "MIME-Version: 1.0\r\n";
    $response_headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $response_headers .= "From: <" . $to . ">";

    // EMAILS

    mail($to, $subject, $msg, $headers);
    mail($from, $subject, $response_msg, $response_headers);
    
    header('Location: https://revoltwind.com/apply.html?q=thankyou');
    exit();


    // ERRORS

    echo json_encode(array(
        "sent" => true
    ));
} else {
    echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}







	
	

	
