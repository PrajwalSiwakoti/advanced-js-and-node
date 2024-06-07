const people = ['ram', 'josh', 'tosh'];
const ages = [1,2,3];
console.log(people);

//module.exports = 'hello';
//module.exports = people

// module.exports = {
//     people : people,
//     ages : ages
// }

//for using same name case
module.exports = {
    people,
    ages
}