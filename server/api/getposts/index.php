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

// Prepare statment.
$sql = "SELECT * FROM post
        ORDER BY created DESC
        LIMIT ?";

$stmt = $db->prepare($sql);
$stmt->bind_param("i", $posts);
$stmt->execute();

// Get query results.
$stmt->store_result();
$stmt->bind_result($id, $author, $img, $title, $content, $type, $votes, $status, $created, $solved, $in_progress);

while ($stmt->fetch()) {
    $res[] = array(
        "author" => $author,
        "imgURL" => $img,
        "title" => $title,
        "content" => $content,
        "type" => $type,
        "votes" => $votes,
        "status" => $status,
        "created" => $created,
        "solved" => $solved,
        "inProgress" => $in_progress);
}

echo json_encode(array("cod" => OK, "posts" => $res));

// Close db connection.
close_connection($db);
