## Tasks

> Work in group to solve these two tasks.

## Task 1: [Express.js](https://expressjs.com/)

- Create a `server` folder.
- Create a `package.json` file using: `npm init -y` inside the `server` folder.
- Install express `npm install express`
- Add the file `./src/app.js`
- Add the contents of `./src/public` folder
- Express, by default does not allow you to serve static files. To serve the static content of `public` folderYou need to enable it using the following built-in middleware.

```js
app.use(express.static('public'));
```

- Add a route _catinfo_ to `app.js`:

```js
app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frank',
    birthdate: '2010-12-25',
    weight: 5,
  };
  res.json(cat);
});
```

- Test these routes in a web browser:
  - http://localhost:3000
  - http://localhost:3000/catinfo

## Task 2:

- What is ExpressJS and what are the benefits of using it?
- What is the difference between route and endpoint?

## Links

- [static content](https://expressjs.com/en/starter/static-files.html)
