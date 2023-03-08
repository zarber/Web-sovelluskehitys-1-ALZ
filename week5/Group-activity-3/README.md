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

2. Test all the endpoints with **POSTMAN** e.g.

```http
POST http://localhost:4000/api/persons
```

```json
{
  "name": "Matti",
  "number": "09-345-234"
}
```

## Task 2

1. Modify the person model so that every person will have have a password and an email.

- In `./models/person.js` replace lines 27-34 with the following code.

```js
const personSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  number: {
    type: String,
  },
});
```

- In `./index.js` replace:

```js
const personName = body.name;
const personNumber = body.number;
```

with

```js
const personEmail = body.email;
const personPassword = body.password;
const personName = body.name;
const personNumber = body.number;
```

- In `./index.js` replace:

```js
const person = new Person({
  name: personName,
  number: personNumber,
});
```

with

```js
const person = new Person({
  email: personEmail,
  password: personPassword,
  name: personName,
  number: personNumber,
});
```

2. Test the endpoints with **POSTMAN** e.g.

```http
POST http://localhost:4000/api/persons
```

```json
{
  "email": "matti@matti.com",
  "password": "45RFgh##@$",
  "name": "Matti",
  "number": "09-345-234"
}
```
