const transactions = [1000, 2000, -3000, 4000, 1000];

//filter positive elements and calculate total amount

// const positiveTransactions =  transactions.filter(function(transaction){
//     return transaction > 0
// })


//const positiveTransactions =  transactions.filter((transaction) => transaction > 0)

// const totalAmount =  positiveTransactions.reduce(function(accumulator, currentItem){
//     return accumulator += currentItem
// }, 0)


const totalAmount =  transactions.filter(function(transaction){
      return transaction > 0
 }).reduce(function(accumulator, currentItem){
    return accumulator += currentItem
 }, 0)
//console.log(positiveTransactions);
console.log(totalAmount);