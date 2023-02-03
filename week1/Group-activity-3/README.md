## Tasks

> Work in group to solve these tasks.

## Task 1: Creating own JavaScript module

JavaScript allows structure large programs by creating code modules that hold related functions and properties that can be exported in multiple other files that need these properties and functions. You can create your own modules and easily include them in your applications. Developer need to use exports keyword to make those functions and properties available outside the module file. This keeps larger projects organized and code cleaner.

Create and export own message module:` message.js`

```js
const print = () => {
  console.log('This is a demo message!');
};
module.exports = { print };
```

And use it in application: `index.js`

```js
const message = require('./message');
message.print();
```

Running the above program (with the command `node index.js`) would print out This is a demo message!.

Remember that you don't need to export everything in a module. You can have declarations that are only available for use inside the module. Now id in below. `user.js`

```js
const id = 'salasana';
const name = 'Matti Seppanen';
const email = 'matti@matti.com';
module.exports = { name, email };
```

`run.js`

```js
const user = require('./user');

console.log(user.id);
console.log(user.name);
console.log(user.email);
```

Will display in console:

```js
undefined
Matti Seppanen
matti@matti.com
```

## Task 2: 3rd party modules

Refer to the following [article](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

- What is a package.json file? - package.json holds important information about the project. It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application.

- Difference between npm and node - Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Npm is the package manager for JavaScript.

- Explain the following command `npm init --yes`- npm init --yes is a npm init command to automatically populate all options with the default npm init values.

- How do you install third party modules? - By using command npm install.

- Install express using the following command: `npm install express`

## Links

- [nodejs.dev](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)
- [labranet](https://ytsp0200.pages.labranet.jamk.fi/04.-Node.js/03.-Node-Package-Manager/)
