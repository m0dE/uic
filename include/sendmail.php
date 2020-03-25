<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

global $_REQUEST;
$response = array('error'=>'');
$contact_email = 'contact@uicbiz.com';

// type
$type = $_REQUEST['type'];	
// parse
$user_name = stripslashes(strip_tags(trim($_POST['username'])));
$user_email = stripslashes(strip_tags(trim($_POST['email'])));
$user_subject = stripslashes(strip_tags(trim($_POST['subject'])));
$phone = stripslashes(strip_tags(trim($_POST['phone'])));
$user_msg =stripslashes(strip_tags(trim( $_POST['message'])));
	
if (trim($contact_email)!='') {
	$subj = 'Message from Invetex';
	$msg = $subj." \r\nName: $user_name \r\nE-mail: $user_email \r\nPhone: $phone \r\nSubject: $user_subject \r\nMessage: $user_msg";

	$head = "Content-Type: text/plain; charset=\"utf-8\"\n"
		. "X-Mailer: PHP/" . phpversion() . "\n"
		. "Reply-To: $user_email\n"
		. "To: $contact_email\n"
		. "From: $user_email\n";
		$errorMessage = "Message sent successfully!";
	if (!mail($contact_email, $subj, $msg, $head)) {
		$errorMessage = error_get_last()['message'];
		$response['error'] = 'Error send message!';
		
	}
} else 
		$errorMessage = error_get_last()['message'];
		$response['error'] = 'Error send message!';	



	// echo json_encode($_POST['username'].''.$_POST['email'].''$_POST['subject'].''.$_POST['message']);
	// echo json_encode($response);
    echo $errorMessage
	//die();
?>
