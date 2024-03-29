<?php
/*
This script logs the user out by invalidating their cookie and
deleting it from the cookie_hash table.
*/

// Error code constants.
include_once("/home/cen4010fal19_g12/public_html/campus_snapshots/server/api/error_codes.php");

// Database connector functions.
include_once("/home/cen4010fal19_g12/public_html/campus_snapshots/server/db_connection.php");

// Check cookie
if (isset($_COOKIE["id"])) {
    $db = open_connection();
    
    $hash = $_COOKIE["id"];

    // Prepare statement.
    $sql = "SELECT z_number
            FROM cookie
            WHERE hash = ?";
    
    $stmt = $db->prepare($sql);
    $stmt->bind_param("s", $hash);
    $stmt->execute();

    // Bind results.
    $stmt->store_result();
    $stmt->bind_result($z_number);
    $stmt->fetch();
    $stmt->close();

    // Delete the cookie from the table.
    if ($z_number) {
        // Prepare statement.
        $sql = "DELETE FROM cookie
                WHERE hash = ?";

        $stmt = $db->prepare($sql);
        $stmt->bind_param("s", $hash);
        $stmt->execute();
        $stmt->close();
    }

    // Delete the cookie from the browser.
    setcookie("id", "", 0, "/~cen4010fal19_g12/campus_snapshots/");

    // Close db connection.
    close_connection($db);
}

echo json_encode(array(
    "cod" => OK
));
