// console.log('babbar here');


// setTimeout(function() {
//     console.log('third');
// },3000);
// function sync() {
//     console.log('first')
// }
// sync();

// console.log('second')

let meraPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('I am inside Promise');
    }, 5000);
    // resolve(2233);
    reject(new Error('Bhaisahab error aaye hai   '))
})

console.log('Pehla');