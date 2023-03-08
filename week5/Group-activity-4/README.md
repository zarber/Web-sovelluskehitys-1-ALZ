## Group Activities

> Work in group to solve these tasks.

## Task 1

Inside the `src` directory

1. create a file `.env` and add the following content:

```text
MONGODB_URI=mongodb+srv://tivi:SqZsopHbsRtRDO24@cluster0.1x4ks.mongodb.net/groupnr?retryWrites=true&w=majority
PORT=4000
```

> In `MONGODB_URI`, replace `groupnr` to rfelect your group e.g `group1` , `group2` etc

2. Run:

```sh
npm install
npm run dev
```

## Task 2

1. In `./index.js` replace lines 26-40 with the following:

```js
app.post('/api/persons', async (request, response, next) => {
  const body = request.body;
  const password = body.password;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  if (Object.keys(body).length === 0) {
    return response.status(400).json({
      error: 'content missing',
    });
  }

  const person = new Person({
    email: body.email,
    password: passwordHash,
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((savedPerson) => savedPerson.toJSON())
    .then((savedAndFormattedPerson) => {
      response.json(savedAndFormattedPerson);
    })
    .catch((error) => next(error));
});
```

2. Test the endpoints with **POSTMAN** e.g.

```http
POST http://localhost:4000/api/persons
```

```json
{
  "email": "matti7@matti7.com",
  "password": "45RFgh##@$",
  "name": "Matti",
  "number": "09-345-234"
}
```

## Task 3

- What is Hashing? - Password hashing is a key step to protecting your users on the backend, but it’s not infallible because it hashes in a consistent way. This means it is predictable and can be beaten by dictionary attacks or rainbow table attacks.
- What is the Rainbow Table Attack and how can we protect against it? - A rainbow table is a database that is used to gain authentication by cracking the password hash. It is a precomputed dictionary of plaintext passwords and their corresponding hash values that can be used to find out what plaintext password produces a particular hash.
