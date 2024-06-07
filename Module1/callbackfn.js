function printLastName(lastName){
    console.log(lastName);
}

function printFirstName(firstName, cb){
    console.log(firstName);
    cb('rogers');
}

printFirstName('steve',printLastName);


//eg 2

const isEven = (n) => {
    return n % 2 === 0;
}

const printResult = (evenFn, num) => {
    const isEvenNumber = evenFn(num); //bts.. isEven(4) function is being called
    console.log(`The number ${num} is an even number: ${isEvenNumber}`);
}

printResult(isEven, 4);







function callbackFn(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
}

function callbackFnTry(){
    console.log('hey');
}


let anArray = [1, 2,'',,-1];
const newArray = anArray.map(callbackFn);
const newArray2 = anArray.map(callbackFnTry);
const newArray3 = anArray.map(isEven);
console.log(newArray3);