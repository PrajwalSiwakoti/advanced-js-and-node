const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
   });
   
const secondPromise = new Promise((res, rej) => {
   setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

////////////////////second example
   const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
 myPromise().then(res => console.log(res));
 console.log('second');
}

async function secondFunction() {
 console.log(await myPromise());
 console.log('second');
}

firstFunction();
secondFunction();