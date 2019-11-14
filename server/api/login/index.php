// This script should do the following:
//   ensure the user enters the correct credentials
//   create a hash and store it in the cookie_hash table on the db
//   if the cookie_hash already exists, update the existing one
//   set a cookie called "id" with a duration of one month with the hash value

<?php
include("/home/cen4010fal19_g12/public_html/campus_snapshots/server/db_connection.php");

if (isset($_POST["username"], $_POST["password"]) && $_POST["password"] != "") {
    $db = open_connection();

    $sql = "SELECT z_number, username, password
            FROM users
            WHERE username = ?";

    // Prepare query.
    $stmt = $db->prepare($sql);

    // Bind parameters.
    $stmt->bind_param("s", $_POST["username"]);

    // Execute query.
    $stmt->execute();

    // Bind results.
    $stmt->store_result();
    $stmt->bind_result($z_number, $username, $password);
    $stmt->fetch();
    $stmt->close();
    

    // Case where login is successful.
    if ($_POST["password"] == $password) {
        // Generate salted SHA-1 key.
        $sha1 = sha1($z_number.(string)rand());

        // Insert into cookie_hash db table.
        $sql = "INSERT INTO cookie_hash(id, hash)
                 VALUES (?, ?)";

        // Bind parameters.
        $stmt = $db->prepare($sql);
        $stmt->bind_param("ss", $z_number, $sha1);
        $check = $stmt->execute();
        $stmt->close();

        // if entry already exists, update to a new hash and set a new cookie.
        if (!$check) {
            $sql = "UPDATE cookie_hash
                    SET hash = ?
                    WHERE id = ?";

            $stmt = $db->prepare($sql);
            $stmt->bind_param("ss", $sha1, $z_number);
            $stmt->execute();
            $stmt->close();
        }


        // Set a cookie with the hashed value and a lifespan of
        // 1 month.
        $month = time() + 60 * 60 * 24 * 31;
        setcookie("id", $sha1, $month, "/~cen4010fal19_g12/campus_snapshots/");
        
        // Return JSON data. Should be the last thing
        // sent for cookies to work properly.
        echo json_encode(array(
            "cod" => "200",
            "username" => $username
        ));
    }
    // Case where login is unsuccessful.
    else {
        echo json_encode(array(
            "cod" => "404"
        ));
    }

    close_connection($db);
} else {
    // Connect to the db.
    $db = open_connection();

    if ($db->connect_errno) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    // Query the db.
    $query = "SELECT * FROM users WHERE username = 'test'";
    $res = $db->query($query);

    echo json_encode($res->fetch_assoc());

    close_connection($db);
}
