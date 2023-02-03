const express = require('express');
const app = express();
const port = 3000;

// use sample users data
let { users } = require('./data.js');
// console.log(typeof users);
// console.log(users.find((user) => user.id === 1));
let id = 4;

// json parser middleware
// parse incoming requests with JSON, assign it to requests body
app.use(express.json());

app.get('/api/users', (req, res) => {
  res.status(200).json({ success: true, data: users });
});

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (user) res.status(200).json({ success: true, data: user });
  else res.status(404).json({ success: false, error: 'User not found!' });
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  // find user
  const user = users.find((user) => user.id === Number(id));
  // user not found
  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: `No user found with id ${id}` });
  }
  // filter user with id away from users collection
  users = users.filter((user) => user.id !== Number(id));
  // return users
  res.status(200).json({ success: true, data: users });
});

app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;
  const user = users.find((user) => user.id === Number(id));
  console.log(name, email, phone);
  // user not found
  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: `No user found with id ${id}` });
  }
  // update user data
  user.name = name;
  user.email = email;
  user.phone = phone;
  res.status(200).json({ success: true, data: users });
});

app.post('/api/users/', (req, res) => {
  // get user from request
  const user = req.body;
  //   console.log(user);
  if (!user.name) {
    return res
      .status(400)
      .json({ success: false, msg: 'No user value provided!' });
  }
  // add a new user
  user.id = id++;
  users = users.concat(user);
  res.status(201).json({ success: true, data: users });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
