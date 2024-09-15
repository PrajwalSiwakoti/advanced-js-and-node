//pending promise
const myPromise = new Promise(function (resolve, reject) {
    let sampleData = [2, 4, 6, 8];
    let randomNumber = Math.ceil(Math.random() * 5);
    randomNumber = 3;
    if (sampleData[randomNumber]) {
      console.log(1);
      resolve(sampleData[randomNumber]);
    } else {
      reject('An error occurred!');
    }
  });
  
  //above console will be printed first because the promise constructor function (aka executor functions) is handled synchronously/called immediately , placed in call stack

//also as there is no async operation above, resolve/reject function is called immediately

//will show a pending promise object if it was not ever resolved or rejected 
//will also show a pending promise object if it took time, try using setTimeout that also means not resolved or rejected
//shows Promise {8}
  console.log(myPromise); 

//then() is added to microtask queue,
  let printReturnValue =  myPromise
  .then(function (e) {
    console.log(e);
    return e;
  });
  console.log('a', printReturnValue); //prints promise pending //as then returning promise which was not resolved or rejected

  function test(number){
    console.log(number);
    console.log('a');
  }
  //now to access return value e , we have to use another then
  //then, catch and finally always returns a promise
  //printReturnValue.then(value => console.log(value+2));
  printReturnValue.then(test);

//   myPromise
//     .then(function (e) {
//       console.log(e);
//     })
//     .catch(function (error) {
//       throw new Error(error);
//     })
//     .finally(function () {
//       console.log('Promise completed');
//     });