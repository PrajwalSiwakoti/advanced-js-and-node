class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

class Student extends Person{
    constructor(_name, _age, _gpa){
        super(_name, _age);
        this.gpa = _gpa;
    }

    testWelcome(){
        super.welcome();
    }

}

let student = new Student('Ram', 23, 4);

student.welcome();