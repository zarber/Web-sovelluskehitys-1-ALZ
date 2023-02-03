// https://www.digitalocean.com/community/tutorials/js-array-find-method
const trees1 = ['birch', 'maple', 'oak', 'poplar'];

const result1 = trees1.find((tree) => tree.startsWith('m'));
console.log(result1);

const trees2 = [
  { name: 'birch', count: 4 },
  { name: 'maple', count: 5 },
  { name: 'oak', count: 2 },
];

const result2 = trees2.find((tree) => tree.name === 'oak');
console.log(result2);
