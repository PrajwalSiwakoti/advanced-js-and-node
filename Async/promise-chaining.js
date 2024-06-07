function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink === 'coffee'){
            resolve('Order for coffee is received');
        }
        else{
            reject('Other orders rejected');
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed');
        resolve(`${order} and is served`);
    })
}
//let placeOrderPromise = placeOrder('coffee');
//console.log(placeOrderPromise);
// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     processOrder(orderPlaced).then(function(orderProcessed){
//         console.log(orderProcessed);
//     })
// })

//another way

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderProcessed = processOrder(orderPlaced);
//     return orderProcessed;
// }).then(function(processedOrder){
//     console.log(processedOrder);
// }).catch(function(err){
//     console.log(err);
// })

//another way 
//Async Await - keywords

async function serveOrder(){

    try{
        let orderPlaced = await placeOrder('coffee');// wait for promise function
        console.log(orderPlaced);

        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
    }catch(err){
        console.log(err);
    }
    
}

serveOrder();