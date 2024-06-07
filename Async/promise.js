//producing a promise
//ma yo kaam garxu, promise la
//k ho ta kaam? (value equality check garney) kaam chai hami promise maa define garxam

let myPromise = new Promise(function(resolve, reject){
    const a = 4;
    const b = 4;

    setTimeout(function(){
        if(a === b){
            resolve('The values are equal');
        }
        else{
            reject('The values are not equal');
        }
    }, 2000)
});

//pending state//try without setTimeout
//console.log(myPromise);

//consuming your promises
myPromise.then(function(result){
    console.log(result);
})//fulfilled state

myPromise.catch(function(result){
    console.log(result);
})//rejected state

//either way a promise has been settled.