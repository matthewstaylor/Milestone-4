<?php
/*
This file should be included in all API endpoints to reference the correct
error code.
*/

define("OK", "200");    // Successful query.
define("CREATED", "201");    // When a resource has been properly stored, i.e. a new user, image upload, etc.
define("BAD_REQUEST", "400");    // When incorrect or malformed parameters are received by the server.
define("NO_AUTH", "401");    // User is not signed in.
define("FORBIDDEN", "403");    // Attempting to access privileged features, i.e. student accessing employee features.
define("NOT_FOUND", "404");    // Requesting a non-existent resource or a username that does not exist.
define("INVALID_METHOD", "405");    // An inappropriate method was used. This API should only really use POST requests.
define("INVALID_FILE", "415");    // An unsupported file type is sent to the server.
