const p1 = new Promise((resolve, reject) => {
    setTimeout( ()=>{
        resolve('P1 success');
    }, 3000);
});

const p2 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
       // resolve('P2 success');
       reject('p2 reject'); //will be output after 1 sec
    }, 1000);
});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       // resolve('P3 success');
       reject('p3 reject'); //will be output after 2 secs
    }, 1000);
});

Promise.all([p1, p2, p3])
    .then((res)=>{
        console.log(res); //result will be displayed in array
    })
    .catch((err)=>{
        console.error(err); //only one result whichever fails first //although same time p2 and p3 rejection, p2 will be logged first as p2 code is in up
    });