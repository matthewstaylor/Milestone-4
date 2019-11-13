<?php
include("/home/cen4010fal19_g12/public_html/campus_snapshots/server/db_connection.php");

if (isset($_POST["username"])) {
    $db = open_connection();

    $res = $db->query("show tables");
    echo json_encode("post request");
} else {
    $db = open_connection();

    $res = $db->query("show tables");
    
    echo json_encode($res);
}
