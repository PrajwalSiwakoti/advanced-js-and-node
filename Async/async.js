const p = new Promise((resolve, reject)=>{
    resolve('hello again');
});
console.log(p);
//always returns a promise
async function getData(){
    //return p;
    return 1;
}

const dataPromise = getData();

console.log(dataPromise);

dataPromise
    .then((res)=>{
        console.log(res); 
    });