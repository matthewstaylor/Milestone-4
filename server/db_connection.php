<?php
function open_connection()
{
    $db_host = "lamp.cse.fau.edu";
    $db_user = "cen4010fal19_g12";
    $db_pass = "9g8okpDe4A";
    $db = "cen4010fal19_g12";
    $conn = new mysqli($db_host, $db_user, $db_pass, $db) or die("Connect failed: %s\n". $conn -> error);
 
    return $conn;
}
 
function close_connection($conn)
{
    $conn -> close();
}
