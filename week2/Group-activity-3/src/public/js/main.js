'use strict';
const img = document.querySelector('img');

img.addEventListener('click', (evt) => {
  img.classList.toggle('small');
});

const getCat = async () => {
  const response = await fetch('./catinfo');
  const json = await response.json();
  document.querySelector('h2').innerHTML = json.name;
  document.querySelector('p:nth-of-type(1)').innerHTML = `Birthdate: ${json.birthdate}`;
  document.querySelector('p:nth-of-type(2)').innerHTML = `Weight: ${json.weight}kg`;
};

app.use(express.static('public'));

getCat();
