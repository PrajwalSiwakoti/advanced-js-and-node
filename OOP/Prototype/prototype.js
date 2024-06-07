// let obj ={}

// console.log(obj);

// let obj1 ={
//     name: 'ram',
//     age : 12
// }

//console.log(obj1);

function createPerson(_name, _age){
    this.name = _name;
    this.age = _age;
    this.speak = function(){
        console.log('speaking');
    }
}

let ramObj = new createPerson('Ram',12);

let  radius =2
console.log(ramObj);
    const shape = {
        radius: 10,
        diameter() {
        return this.radius * 2;
        },
        perimeter: () => 2 * this.radius,
       };
       
       console.log(shape.diameter());
       console.log(shape.perimeter());