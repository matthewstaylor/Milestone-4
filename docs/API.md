# Documentation for the server API

This document presents the endpoints expected values and their expected
responses. All endpoints should prioritize POST over GET requests and **always**
return JSON objects.
All endpoints are relative to `http://lamp.cse.fau.edu/~cen4010fal19_g12/campus_snapshots/server/`

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
  cod: "200"
  z_number: string
}
```

if credentials entered incorrectly:

```
{
  cod: "404"
  z_number: ""
}
```

Should also set a cookie with a key that will be used in subsequent requests
for validation.

## Logout

### Endpoint

`./api/logout`

### Request

```
NULL                    // Just querying the endpoint should trigger the logout process.
```

### Response

```
{
  cod: 200
  z_number: ""
}
```

Should kill or invalidate the cookie of the current user.
