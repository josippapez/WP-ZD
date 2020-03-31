<?php

$data = json_decode($_POST["signup"], false);

$email = $data->email;
$pswd = $data->pswd;
$obj = new \stdClass();

if (strlen($email) == 0 || strlen($pswd) == 0){
    header("HTTP/1.1 401 Unauthorized");
    $obj->error = "Email or password are missing.";
    $JSON = json_encode($obj);
    echo $JSON;
    exit;
}
else{
    $obj->email = $email;
    $JSON = json_encode($obj);
    echo $JSON;
    exit;
}
?>
