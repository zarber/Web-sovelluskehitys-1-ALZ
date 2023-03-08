## Group Activities

> Work in group to solve these tasks.

## Task 1

- Change the route handler functions in `src/notes.js` into async functions as shown below. Compare your attempt with the code in `solution/notes-sol.js` file.

- Chaining using Promises

```js
function test() {
  return func1()
    .then((v1) => {
      return func2(v1);
    })
    .then((v2) => {
      return func3(v1, v2);
    });
}
```

- Chaining using Async/Await

```js
async function test() {
  let v1 = await func1();
  let v2 = await func2(v1);
  return await func3(v1, v2);
}
```

## Task 2

- Does the code from the first group activity use async/await?
