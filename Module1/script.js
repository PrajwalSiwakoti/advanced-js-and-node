//console.log(1);

let a = 17;

//console.log(17);

function isInteger(str){
    const intValue = parseInt(str,10);
    console.log(intValue);
    console.log(typeof str === 'number');
    return Number.isInteger(intValue) && intValue.toString() ===str;
}

 console.log(isInteger("123"));
// console.log(isInteger("40 years"));
// console.log(isInteger("  4  "));
console.log(isInteger("4.3"));
console.log(isInteger("4 5 6"));

let arr = "1,2,3".split(',');
console.log(arr);
