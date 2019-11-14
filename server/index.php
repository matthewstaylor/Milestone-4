<?php
$cookie = 0;
if (isset($_COOKIE["id"])) {
    $cookie = $_COOKIE["id"];
}


echo json_encode(array(
    "request URI" => $_SERVER["REQUEST_URI"],
    "this" => "is a test",
    "cookie" => $cookie
));
