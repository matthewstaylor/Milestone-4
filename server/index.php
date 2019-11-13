<?php
$data = array("request URI" => $_SERVER["REQUEST_URI"], "this" => "is a test");

echo json_encode($data);
