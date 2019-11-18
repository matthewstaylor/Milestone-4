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
    NO_AUTH:        "401",         // User is not signed in.
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
  cod: OK
}
```

Should kill or invalidate the cookie of the current user.

---

## Get Posts

### Endpoint

`./api/getposts/`

### Request

```
{
  posts?: int,                        // Number of posts required. 10 will be returned by default.
  type?: string,                      // Type of posts. Default is "all".
  sort?: "abc" | "date" | "votes",    // "date" by default.
  notAscending?: bool                 // false by default, providing anything in this
                                      // parameter sets it to true, exscept an empty string.
}
```

### Response

If signed in:

```
{
  cod: OK,
  posts: [
    author: string,       // Author's username
    imgURL: string,       // URL to the post's image.
    title: string,
    content: string,
    type: “event” | “announcement” | “issue”,
    votes: int,
    status: "pending" | "in progress" | "solved",
    created: int,         // Note: Unix timestamp (the number of seconds since the
                          // beginning of the Unix epoch: January 1 1970, 00:00:00 GMT).
    solved: int,          // Unix timestamp the issue was solved. 0 if not solved.
    inProgress: int       // Unix timestamp the issue began progress. 0 if not solved.
  ],
  [/* another post */]
}
```

If signed out:

```
{
  cod: NO_AUTH,
  posts: [
    author: string,       // Author's username
    imgURL: string,       // URL to the post's image.
    title: string,
    content: string,
    type: “event” | “announcement” | “issue”,
    votes: int,
    status: "pending" | "in progress" | "solved",
    created: int,         // Note: Unix timestamp (the number of seconds since the
                          // beginning of the Unix epoch: January 1 1970, 00:00:00 GMT).
    solved: int,          // Unix timestamp the issue was solved. 0 if not solved.
    inProgress: int       // Unix timestamp the issue began progress. 0 if not solved.
  ],
  [/* another post */]
}
```
