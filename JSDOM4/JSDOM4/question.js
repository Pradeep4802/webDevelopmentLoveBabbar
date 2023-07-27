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

// async function makeApiCall() {
//   let fet = new Promise(async (resolve, reject) => {
//     let content = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     resolve(content.json());
//     reject(new Error("Error is produced"));
//   });

//   let mac = await fet;
//   return mac;
// }

// makeApiCall().then((value) => console.log(value));

// async function fetchData(data) {
//   try {
//     const url = await fetch(data);
//     const content = await url.json();
//     return content;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

// fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) => console.log(data)).catch((error) => console.log(error));

// 5. Write a function that uses async/await to make multiple API calls in parallel and returns a promise with an array of responses.

// async function fetchMultipleData(urls) {
//   try {
//     const responses = await Promise.all(urls.map(url => fetch(url)));
//     const data = await Promise.all(responses.map(response => response.json()));
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// }

// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/comments/1",
//   "https://jsonplaceholder.typicode.com/albums/1",
// ];

// fetchMultipleData(urls)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// Promise.all() method used

// Simple promise that resolves
// after a given time
// const tOut = (t) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Completed in ${t}`);
//     }, t);
//   });
// };

// // Resolving a normal promise
// tOut(1000).then((result) => document.write(result + "<br>"));
// // Completed in 1000

// // Promise.all
// Promise.all([tOut(1000), tOut(10000)]).then((result) => document.write(result));

// const axios = require('axios');

// axios.get('http://webcode.me').then(resp => {

//     console.log(resp.data);
// });

// 6. Write a function that throws an error if the parameter is not a number, and handles the error with a custom error message.

// function handlesParam(num) {
//   return new Promise((resolve, reject) => {
//     if (typeof num === "number") {
//       resolve(num);
//     } else {
//       reject(new Error("Invalid input. Expected a number."));
//     }
//   });
// }

// handlesParam(10)
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error.message));
// handlesParam("Not a number")
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error.message));


// 8. Write a function that uses console.assert to check whether a variable is equal to a certain value, and thrown an error if the assertion fails.

// function assertEqual(actual, expected, message) {
//   console.assert(actual === expected, message || `Expected ${expected}, but got ${actual}`);
// }

// assertEqual(25,24)

// console.log(location);
// console.log(window.document.URL);
// console.log(document.readyState);
console.log(document.children);