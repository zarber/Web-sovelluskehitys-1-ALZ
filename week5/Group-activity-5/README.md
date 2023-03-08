## Group Activities

> Work in group to solve these tasks.

## Task 1

Inside the `src` directory

1. create a file `.env` and add the following content:

```text
MONGODB_URI=mongodb+srv://tivi:SqZsopHbsRtRDO24@cluster0.1x4ks.mongodb.net/groupnr?retryWrites=true&w=majority
PORT=4000
SECRET=mysecretepassword
```

> In `MONGODB_URI`, replace `groupnr` to rfelect your group e.g `group1` , `group2` etc

2. Run:

```sh
npm install
npm run dev
```

## Task 2

1. In `./index.js` replace lines 27-52 with the following:

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

  const token = jwt.sign({ email: body.email }, process.env.SECRET, {
    expiresIn: '1h',
  });

  person
    .save()
    .then((savedPerson) => savedPerson.toJSON())
    .then((savedAndFormattedPerson) => {
      response.json({
        token,
        savedAndFormattedPerson,
      });
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
  "email": "matti8@matti8.com",
  "password": "45RFgh##@$",
  "name": "Matti",
  "number": "09-345-234"
}
```
