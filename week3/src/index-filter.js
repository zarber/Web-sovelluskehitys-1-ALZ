// https://www.digitalocean.com/community/tutorials/js-filter-array-method-de
//https://www.digitalocean.com/community/tutorials/js-filter-array-method

const numbers = [1, 3, 6, 8, 11];

const cb = function (number) {
  return number > 3;
};
const greaterThanSeven = numbers.filter(cb);

console.log(greaterThanSeven);

const creatures = [
  { name: 'Shark', habitat: 'Ocean' },
  { name: 'Whale', habitat: 'Ocean' },
  { name: 'Lion', habitat: 'Savanna' },
  { name: 'Monkey', habitat: 'Jungle' },
];

const aquaticCreatures = creatures.filter(function (creature) {
  return creature.habitat == 'Ocean';
});

console.log(aquaticCreatures);
