const calculator = require('./calculator');
const date = require('./lib/date');

const x = calculator.sum(23, 12);
console.log(x);
const y = calculator.subs(23, 12);
console.log(y);
const z = calculator.mult(23, 12);
console.log(z);
const w = calculator.div(23, 12);
console.log(w);

console.log(date.myDateTime);
