function Person(_name, _age){
    this.name = _name;
    this.age = _age;
    this.speak = function(){
        console.log('speaking');
    }
}

Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`);
}

//why do we need to add method/property via prototype and why not directly into constructor function?
//ans: if you console log person1 obj, you can see speak() method repeating for every object whereas getNameAndAge() method is added to prototype
//here ecah instance of Person object has its own copy of speak method, but using getNameAndAge() in prototype instead, all instances of Person share the same greet method, which is more memory efficient.
let person1 = new Person('Ram', 20);

console.log(person1);
