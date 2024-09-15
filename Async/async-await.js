const p = new Promise((resolve, reject) => {
   // resolve('hello');
   setTimeout(()=>{
    resolve('hello');
   }, 2000);
});

//previously handling with then method
function getData(){
    //js engine will not wait for promise to be resolved ..so namaste will be printed first
    p.then((res)=>{
        console.log(res);
    });
    console.log('namaste');
}

getData();

//handling with async/await
async function handlePromise(){
    const val = await p; //js engine will wait for promise to be resolved ..so will not move forward before resolving and namaste won't get printed first
    //not exactly js engine will wait..handlePromise is suspended from call stack until promise is resolved
    console.log(val);
    console.log('namaste'); 
}

handlePromise();