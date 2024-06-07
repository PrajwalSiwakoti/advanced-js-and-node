
greet(); //function executed fine 
console.log(a); //but here undefined
//add(2,4);

var a = 'hi';

function greet(){
    console.log("Hello World");
}

var add = function(a, b){
    console.log(a+b);
}



function checkAge(data) {
    if (data === { age: 18 }) {
    console.log("You are an adult!");
    } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
    } else {
    console.log(`Hmm.. You don't have an age I guess`);
    }
   }
   
   checkAge({ age: 18 });