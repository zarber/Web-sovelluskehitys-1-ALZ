## Tasks

> Work in group to solve these tasks.

## Task 1: find()

`The`find() method **returns the first element** in an array that passes a test function.

The following example uses the find() method to search for the first even number in an array of numbers:

```js
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.find((e) => e % 2 == 0));
```

Suppose that we have a list of customer objects with name and credit properties as follows:

```js
let customers = [
  {
    name: 'ABC Inc',
    credit: 100,
  },
  {
    name: 'ACME Corp',
    credit: 200,
  },
  {
    name: 'IoT AG',
    credit: 300,
  },
];
```

- use the `find()` method to find the first customer whose credit is greater than 100.

## Task 2: filter()

Suppose you have an array of city objects where each object contains two properties: name and population.

```js
let cities = [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 },
  { name: 'Chicago', population: 2695598 },
  { name: 'Houston', population: 2099451 },
  { name: 'Philadelphia', population: 1526006 },
];
```

To find the cities whose population is greater than 3 million, you typically loop over the array elements using a for loop and test if the value of the population property satisfies the condition.

However there is another way: the `filter()` method that allows you to do this task in a shorter and cleaner way.

- Use the code below to find the cities whose population is greater than 3 million.

```js
let bigCities = cities
  .filter
  //your code here
  ();
console.log(bigCities);
```

## Task 3: concat()

To merge two or more arrays, you use the `concat()` method of the Array object. `concat()` returns a **new** array and doesn’t change the original arrays. For example:

```js
let odd = [1, 3, 5];
let even = [2, 4, 6];
// merge odds and evens array
let combined = odd.concat(even);
console.log(odd);
console.log(even);
console.log(combined);
```

- Join the 3 arrays below into a new array named `alphanumerics`

```js
let upper = ['A', 'B', 'C'];
let lower = ['a', 'b', 'c'];
let digits = [1, 2, 3];
```

## Links

- [JavaScript Array find() Method](https://www.javascripttutorial.net/es6/javascript-array-find/)
- [JavaScript Array filter: Filtering Elements](https://www.javascripttutorial.net/javascript-array-filter/)
- [JavaScript Array concat: Merge Arrays](https://www.javascripttutorial.net/javascript-array-concat/)
