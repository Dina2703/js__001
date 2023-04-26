// executing synchronous code
console.log("First");
console.log("Second");
console.log("Third");

//executing async code, using timeout feature.
console.log("First async");
setTimeout(() => {
  console.log("Second async");
}, 2000);
console.log("Third async");
// we get :First async, Third async, Second async

//what if timeout duratin is 0ms?
console.log("First async with 0 duration");
setTimeout(() => {
  console.log("Second async with 0 duration");
}, 0);
console.log("Third async with 0 duration");
//The duration parameter to setTimeout() is the minimum delay and not the guaranteed delay. Means even though we have only 0ms of duration, the callback func with log() must wait its turn to be executed in the Callback queue.
