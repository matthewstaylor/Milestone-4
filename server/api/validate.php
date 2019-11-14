<?php
/*
This script should be included in all API calls.
This script should do the following:
  check the user is logged in by comparing the cookie's hash
    value with the cookie_hash table
 */

// Error code constants.
include("/home/cen4010fal19_g12/public_html/campus_snapshots/server/api/error_codes.php");

if (!isset($_COOKIE["id"])) {
    echo json_encode(array(
        "cod" => "404"
    ));
} else {
    $hash = $_COOKIE["id"];

    // Prepare statement.
    $sql = "SELECT z_number
            FROM cookie_hash
            WHERE hash = ?";
    
    $stmt = $db->prepare($sql);
    $stmt->bind_param("s", $hash);
    $stmt->execute();

    // Bind results.
    $stmt->store_result();
    $stmt->bind_result($z_number);
    $stmt->fetch();
    $stmt->close();

    if ($z_number) {
        echo json_encode(array(
            "cod" => "200",
            "z_number" => $z_number
        ));
    } else {
        echo json_encode(array(
            "cod" => "404"
        ));

        // Delete the cookie.
        setcookie("id", "", 0, "/~cen4010fal19_g12/campus_snapshots/");
    }
}
