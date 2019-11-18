<?php
include_once("../validate.php");

// Open db connection.
$db = open_connection();

// Set the default API query values.
$posts = 10;
$type = "all";
$sort = "date";
$notAscending = false;

// Set the API query values.
if (isset($_POST["posts"])) {
    $post = (int)$_POST["posts"];
}
if (isset($_POST["type"])) {
    $type = $_POST["type"];
}
if (isset($_POST["sort"])) {
    $sort = $_POST["sort"];
}
if (isset($_POST["ascending"])) {
    $ascending = (bool)$_POST["ascending"];
}

// Prepare statement.


$sql = "SELECT * FROM post
        ORDER BY created DESC
        LIMIT ?";

$stmt = $db->prepare($sql);
$stmt->bind_param("i", $posts);
$stmt->execute();

// Get query results.
$stmt->store_result();
$stmt->bind_result($id, $author, $img, $title, $content, $type, $votes, $status, $created, $solved, $in_progress);

$img_url = "http://lamp.cse.fau.edu/~cen4010fal19_g12/campus_snapshots/server/";

while ($stmt->fetch()) {
    $res[] = array(
        "author" => $author,
        "imgURL" => $img_url.$img,
        "title" => $title,
        "content" => $content,
        "type" => $type,
        "votes" => $votes,
        "status" => $status,
        "created" => $created,
        "solved" => $solved,
        "inProgress" => $in_progress);
}

// Verify login for posts.
$validated = validate();
if ($validated) {
    $err_code = OK;
} else {
    $err_code = NO_AUTH;
}

echo json_encode(array("cod" => $err_code, "posts" => $res));

// Close db connection.
close_connection($db);
