const manyPeoples = require('./people');

//console.log(manyPeoples);
console.log(manyPeoples.ages);


//importing just people property
//destructuring
const {people} = require('./people');
console.log('ppl', people);


//we can also require built in modules
//eg os

const os = require('os');

console.log(os.platform(), os.homedir());