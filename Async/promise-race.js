
const p1 = new Promise((resolve, reject) => {
    setTimeout( ()=>{
        resolve('P1 success');
    }, 3000);
});

const p2 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve('P2 success');
       //reject('p2 reject'); //will be output after 1 sec
    }, 1000);
});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       // resolve('P3 success');
       reject('p3 reject'); //will be output after 2 secs
    }, 1000);
});

Promise.race([p1, p2, p3])
    .then((res)=>{
        console.log(res);  //whichever gets settled first, will be logged
    })
    .catch((err)=>{
        console.error(err);
    });