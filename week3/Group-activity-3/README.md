## Task

## Task 1: Middleware

Middleware are functions that can be used for handling request and response objects.

The` json-parser` used in `./src/index.js` is a built in middleware. It takes the raw data from the requests that are stored in the request object, parses it into a JavaScript object and assigns it to the request object as a new property body.

In practice, you can use several middlewares at the same time. When you have more than one, they're executed one by one in the order that they were taken into use in express.

Let's implement our own middleware that prints information about every request that is sent to the server.

Middleware is a function that receives three parameters as follows

```js
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
};
```

- Add the snippet above to `./src/index.js`

At the end of the function body, the next function that was passed as a parameter is called. The next function yields control to the next middleware.

Middleware is taken into use like this:

```js
app.use(requestLogger);
```

- Add the snippet above to `./src/index.js`
- compare your work with sample solution at `./src/final/index.js`
- Test this endpoint application with POSTMAN

```http
POST http://localhost:3001/api/notes
```

```json
{
  "content": "HTML is FUN",
  "date": "2023-01-25T17:30:31.098Z",
  "important": true
}
```

**Order of Middleware**

Middleware functions are called in the order that they're taken into use with the express server object's use method. Notice that json-parser is taken into use before the requestLogger middleware, because otherwise request.body will not be initialized when the logger is executed!

Middleware functions have to be taken into use before routes if we want them to be executed before the route event handlers are called. There are also situations where we want to define middleware functions after routes. In practice, this means that we are defining middleware functions that are only called if no route handles the HTTP request.

Let's add the following middleware after our routes. This middleware will be used for catching requests made to non-existent routes. For these requests, the middleware will return an error message in the JSON format.

```js
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);
```

- Add the snippet above to `./src/index.js`
- compare your work with sample solution at `./src/final/index.js`
- Test your application.

## Task 2: Route level middleware

The code below is for another middleware named `logger`

```js
const logger = (req, res, next) => {
  const dateNow = new Date();
  const dateString = `${dateNow.toLocaleDateString()} - ${dateNow.toLocaleTimeString()}`;
  console.log('Date:', dateString);
  console.log('Method:', req.method);
  console.log('Url:  ', req.url);
  next();
};
```

We can use `logger` at application level (`app.use(logger)`) as above or at the route level as follows:

```js
app.get('/api/notes', logger, (req, res) => {
  res.status(200).json({ success: true, data: users });
});
```

- Add the snippet above to `./src/index.js`
- Test this endpoint application with POSTMAN:

```http
GET http://localhost:3001/api/notes
```

> note: Route level middleware is NOT the same as Router level middleware

## Links

> [Using middleware](https://expressjs.com/en/guide/using-middleware.html)
