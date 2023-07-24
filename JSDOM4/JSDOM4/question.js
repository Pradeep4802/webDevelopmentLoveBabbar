// Write a function that returns a promise which resolves after a specified number of milliseconds.

// function delay(milliseconds) {
//   let pro1 = new Promise(function (resolve, response) {
//     setTimeout(() => {
//       resolve();
//     }, milliseconds);
//   });
//   return pro1;
// }

// console.log("Start");
// delay(5000).then(() => console.log());
// console.log("End");

// 2. Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds.

// function delay1(errMessage,milliseconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error(errMessage));
//         }, milliseconds);
//     });
// }

// console.log('Start');
// delay1("This is some error of code",2000).catch((value)=>console.error(value.message));
// console.log('End');

// 3. Write a function that returns a promise which resolves with an array of random numbers after a specified number of milliseconds.

// function generateRandomNumber(length, milliseconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const numbersArray = Array.from({ length }, () => Math.floor(Math.random() * 100));
//             resolve(numbersArray);
//         }, milliseconds);
//     })
// }

// console.log("Start");
// generateRandomNumber(5, 3000).then((value) => console.log(value));
// generateRandomNumber(10, 3000).then((value) => console.log(value));
// let result = Array.from([2, 4, 6], (element) => element + 2);

// console.log(result);
// console.log('End');

// 4. Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.

async function makeApiCall() {
  let fet = new Promise(async (resolve, reject) => {
    let content = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    resolve(content.json());
    reject(new Error("Error is produced"));
  });

  let mac = await fet;
  return mac;
}

makeApiCall().then((value) => console.log(value));

async function fetchData(data) {
  try {
    const url = await fetch(data);
    const content = await url.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) => console.log(data)).catch((error) => console.log(error));
