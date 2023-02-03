## Tasks

> Work in group to solve these tasks.

## Task 1: JSON

- Use the JavaScript function `JSON.stringify()` to convert the following object into a string:

```js
const obj = { name: 'John', age: 30, city: 'New York' };
```

- Use the JavaScript function `JSON.parse()` to convert the following text into a JavaScript object:

```text
'{"name":"John", "age":30, "city":"New York"}'
```

## Task 2: Creating New Key/Value Pairs

1. Open the node REPL and create a new empty object called `obj` like this:

```js
let obj = {};
```

2. Add a new key/value pair to the object `obj` by _assigning_ a new value to a new key like so:

```js
obj.hello = 'world';
obj['number'] = 25;
```

3. Now, check the value of `obj` in the console and ensure that it has the two key/value pairs added above. This is how we create new key/value pairs in existing objects.

4. Add a `favoriteColor` key/value pair to the object.

## Task 3: Creating Objects

1. Create an object that represents **you**. It should contain your first name, last name, age and hometown.

2. Add three more key/value pairs to your object that represent other attributes of yourself. Ideas include (but are not limited to):

- Favorite TV Shows/Sports/Activities etc.
- Occupation
- Date of Birth
- Pets (number of pets, names of pets, etc.)

**HINT:** You can just modify the object that you created before.

3.  The values in an object can be objects themselves, and in fact, this is a very common pattern. For example, consider the following object that represents a computer:

```js
let computer = {
  brand: 'Apple',
  year: 2014,
  model: 'MacBook Pro',
  size: '15-inch',
  specs: {
    processor: '2.3GHz Intel Core i7',
    memory: '16 GB 1600 MHz DDR3',
    graphics: 'Intel Iris Pro 1536 MB',
  },
};
```

You should notice that the `specs` key in the `computer` object is an object itself! We could access information about the processor using dot-notation like so:

```js
computer.specs.processor; // => "2.3GHz Intel Core i7"
```

Change your object to have a `name` key, the value of which is an **object** ; this object should have `first`, `last` and `middle` keys containing your first, last, and middle names respectively (make sure to remove the `firstName` and `lastName` keys that you added before). You should be able to access your **last name** afterwards like so (assuming your object is called `you`):

```js
you.name.last; // => YOUR LAST NAME
```

## Links

- [Hack Reactor](https://github.com/hackreactor/javascript_301/tree/master/4-objects)
- [JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp)
- [JSON.Parse](https://www.w3schools.com/js/js_json_parse.asp)
