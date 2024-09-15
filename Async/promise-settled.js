const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       // resolve('p1 success');
       reject('p1 fail');
    }, 3000);
});

const p2  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('p2 success');
        reject('p2 fail');
    }, 1000);
});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('p3 success');
        reject('p3 fail');
    }, 2000);
});

Promise.allSettled([p1, p2, p3])
    .then((res)=>{
        console.log(1);
        console.log(res); //will log array of objects //sabai fail huda pani then mai janey raixa
    })
    .catch((err)=>{
        console.error(err); 
    });