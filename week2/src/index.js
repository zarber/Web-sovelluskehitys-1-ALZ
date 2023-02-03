const aPerson = {
    name: 'ALZ',
    age: 25,
    city: 'New York',
};
//console.log.apply(aPerson)

const me = {
    name: 'Arber',
    surname: 'Zeqiri',
    age: 25,
    dateOfBirth: '25.01.1998',
    city: 'Helsinki',
    favouriteTVShow: 'The White Lotus',
    favouriteActivity: 'building muscles',

};
//console.log.apply(me)

const myJSON = JSON.stringify(me);
console.log(myJSON);