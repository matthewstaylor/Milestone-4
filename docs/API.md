# Documentation for the server API

This document presents the endpoints expected values and their expected
responses. All endpoints should prioritize POST over GET requests and **always**
return JSON objects.
All endpoints are relative to `http://lamp.cse.fau.edu/~cen4010fal19_g12/campus_snapshots/server/`

---

## Error Codes

Here is a list of all the error codes and their meanings used throughout
this API. The definitions can be found at `./api/error_codes.php`,
and should be included in all API endpoints to reference the correct error code.

Note, if you include the validad.php script, this script will already be included.

```
{
  "cod": {
    OK:             "200",         // Successful query.
    CREATED:        "201",         // When a resource has been properly stored, i.e. a new user, image upload, etc.
    BAD_REQUEST:    "400",         // When incorrect or malformed parameters are received by the server.
    FORBIDDEN:      "403",         // Attempting to access privileged features, i.e. student accessing employee features.
    NOT_FOUND:      "404",         // Requesting a non-existent resource or a username that does not exist.
    INVALID_METHOD: "405",          // An inappropriate method was used. This API should only really use POST requests.
    INVALID_FILE:   "415",          // An unsupported file type is sent to the server.

  }
}
```

## Validate Script

This script should be included in all API endpoints, except login and logout, to avoid
re-implementing each time.

This script can be found at `./api/validate.php`.

### Functions

```
validate() => bool
```

#### Outcome

If true, the user is assumed to be logged in. False otherwise.

---

## Login

### Endpoint

`./api/login/`

### Request

```
{
  username: string,
  password: string
}
```

### Response

if credentials entered correctly:

```
{
  cod: OK,
  username: string
}
```

if credentials entered incorrectly:

```
{
  cod: NOT_FOUND,
  username: ""
}
```

Should also set a cookie with a key that will be used in subsequent requests
for validation.

If both username and password are not provided:

```
{
  cod: BAD_REQUEST
}
```

---

## Logout

### Endpoint

`./api/logout/`

### Request

```
NULL                    // Just querying the endpoint should trigger the logout process.
```

### Response

```
{
  cod: OK,
  z_number: ""
}
```

Should kill or invalidate the cookie of the current user.
