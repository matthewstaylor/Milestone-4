# Querying the API.

If you are writing a component, let's say a button, that when you click, you become logged in.

Due to the limitation of running on the LAMP server, we do not have access to the php.ini file needed to make
React Router work properly, so all data must be loaded asynchronously, so we cannot just make a form, per say
and submit it, because this would cause the page to reload, resetting the application to it's initial state.

So what we need is a way to query the server without causing the page to reload. This is done through AJAX calls.
AJAX Stands for Asynchronous JavaScript and XML and is a set of techniques used to fetch data from a server without
causing the entire page to reload. There are many ways to go about doing this, and JavaScript offers a few functions
to make this possible, however, to make our lives easier, we're going to use an NPM package called Axios which is
used to facilitate these transactions.

You must remember to include axios wherever you're going to use it.

```
include axios from "axios";
```

Let's say this is the button:

```
<Button>
  Click me!
</Button>
```

What we can do is assign an onClick event listener to the button.

```
<Button onClick={() => {/* code goes here... */}}>
  Click me!
</Button>
```

JavaScript provides two ways to use asynchronous calls. We will discuss both.

### .then()

```
<Button onClick={() => {
    // To make a post request, we must first add the data. This is because
    // Axios would rather send JSON data, and PHP prefers other encodings for POST request.
    formData = new FormData();

    // Now we add the data we want to send.
    formData.append("username", username);
    formData.append("password", password);

    /*
    Now the POST. The endpoint is the first argument, the data the second. When the server
    replies, the .then statement will be called. It receives an response argument. The res
    has a property called "data" which is where there the reply from the server is stored
    as a JSON object.
    */
    axios.post("/~cen4010fal19_g12/campus_snapshots/server/api/login/", formData)
      .then((res) => console.log(res.data)); // you can continue chaining .then() if you need to.

    /*
    if you have other code, it will continue running here while the above function
    call waits for the response from the server. **Keep this in mind**.
    */
  }}>
  Click me!
</Button>
```

### async/await

This second method can seem a little tricker at first, but it can lead to simpler code
and easier to read, since you're not dealing with a lot of chaining and anonymous functions.

```
// if you want to use the async syntax, you must use the async keyword before the
// function name that will use it.
<Button onClick={async () => {
    // To make a post request, we must first add the data. This is because
    // Axios would rather send JSON data, and PHP prefers other encodings for POST request.
    formData = new FormData();

    // Now we add the data we want to send.
    formData.append("username", username);
    formData.append("password", password);

    /*
    First, we have to assign the response from the POST request to the server. An async function will
    wait for a response from the server before continuing execution.
    */
    const res = await axios.post("/~cen4010fal19_g12/campus_snapshots/server/api/login/", formData);

    // Now we just use the response as we would regularly.
    console.log(res.data);

    /*
    if you have other code, it will continue running here while the above function
    call waits for the response from the server. **Keep this in mind**.
    */
  }}>
  Click me!
</Button>
```
