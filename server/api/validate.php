<?php
/*
This should be included in most API calls.
This script should do the following:
  check the user is logged in by comparing the cookie's hash
    value with the cookie_hash table
  If the user is authenticated, the function will return true, false otherwise.
 */

// Error code constants.
include_once("/home/cen4010fal19_g12/public_html/campus_snapshots/server/api/error_codes.php");

// Database connector functions.
include_once("/home/cen4010fal19_g12/public_html/campus_snapshots/server/db_connection.php");

function validate()
{
    $db = open_connection();
    
    if (!isset($_COOKIE["id"])) {
        return false;
    } else {
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

        if ($z_number) {
            return true;
        } else {
            return false;

            // Delete the cookie.
            setcookie("id", "", 0, "/~cen4010fal19_g12/campus_snapshots/");
        }
    }

    close_connection($db);
}
