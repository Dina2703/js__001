// executing synchronous code
// console.log("First");
// console.log("Second");
// console.log("Third");

//executing async code, using timeout feature.
// console.log("First async");
// setTimeout(() => {
//   console.log("Second async");
// }, 2000);
// console.log("Third async");
// we get :First async, Third async, Second async

//what if timeout duratin is 0ms?
// console.log("First async with 0 duration");
// setTimeout(() => {
//   console.log("Second async with 0 duration");
// }, 0);
// console.log("Third async with 0 duration");
//The duration parameter to setTimeout() is the minimum delay and not the guaranteed delay. Means even though we have only 0ms of duration, the callback func with log() must wait its turn to be executed in the Callback queue.

//promise-based async code example
// console.log("first from promise-based");
// const promise = fetch("https://date.nager.at/api/v2/publicholidays/2020/US");
// promise.then((value) => value.json()).then((data) => console.log(data));
//but the nicer way to write async promise-based code using async / await
// async function fetchData() {
//   const response = await fetch(
//     "https://date.nager.at/api/v2/publicholidays/2020/US"
//   );
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();
// console.log("second from promise-based");

//Async setTimeout + Promise code execution

setTimeout(() => {
  console.log("First");
}, 0); //In this case: 'Second','First','Promise value is 24', ,

// setTimeout(() => {
//   console.log("First");
// }, 1000); //In this case: 'Second','Promise value is 24', 'First',

const promise = fetch("http://www.randomnumberapi.com/api/v1.0/random");

promise
  .then((value) => value.json())
  .then((data) => console.log("Promise value is " + data));

let i = 0;
while (i < 100000) {
  //blocks for 1sec
  i++;
}
console.log("Second");
