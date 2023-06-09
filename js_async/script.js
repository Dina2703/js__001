//setTimeout(func, duration, param1, param2, ...)
function greet() {
  console.log("Hello");
}
setTimeout(greet, 2000);

//example setTimeout() with params for the func
function greetByName(name) {
  console.log("Hello " + name);
}
setTimeout(greetByName, 2000, "Ann");

//you can remove/clear  setTimeout function for the unmounted components, to prevent code from incorrectly executing.
function greet2(name) {
  console.log("Hello " + name);
}
const timeoutID = setTimeout(greet2, 1000, "Joy");
clearTimeout(timeoutID); //nothing is logged to the console.

//setInterval(func, duration, param1, param2, ...)

function greetWithSetInterval() {
  console.log("Hello");
}

// setInterval(greetWithSetInterval, 2000); //logs 'hello' every 2sec.

//Intervals keep running a task FOREVER, so you should clear the interval when appropriate.

const intervalIDToClear = setInterval(greetWithSetInterval, 1000);
function myStopFunction() {
  clearInterval(intervalIDToClear);
}

setTimeout(myStopFunction, 3000); //it will stop the interval function after 10 sec.

//-------CALLBACK FUNCTIONS -----------

//example of the Synchronous Callback. In this case the  callback func defines the logic ((a, b) => a - b) that the higher order function needs to apply.
let numbers = [1, 20, 13, 41, 15, 6, 0, 2];
let sorted = numbers.sort((a, b) => a - b);
console.log(sorted);

//------examples of the Asynchronous Callback.
//in this example setTimeout() method acts as the higher order function and greetU() func is the callback. It's Asynchronous Callback because the setTimeout() does NOT immediatly run, it waits for .5sec, then executes the callback.
function greetU(name) {
  console.log("Hello " + name);
}
setTimeout(greetU, 500, "Sunny");

//example with addEventListener(). Here addEventListener() which acts as a higher order func does NOT immediatly run, it wait until user clicks the btn.
function callback() {
  document.getElementById("demo").innerHTML = "Hello";
}
const btn = document.getElementById("btn");
btn.addEventListener("click", callback);

//-------Promises-------
//How to create a Promise? Use new keyword and Promise constructure function.
// const promise = new Promise();

//How to fulfill and reject Promise? The Promise constructure function accepts one function as its argument. So we pass an arrow function. And this arrow function automatically receives 2 arguments: resolve and reject. They both functions.
const promise = new Promise((resolve, reject) => {
  // some async operation
  //call resolve() to change the status of the Promise from 'pending' to 'fulfilled'
  resolve();
  //call reject() to change the status of the Promise from 'pending' to 'rejected'
  reject();
});

//How to execute callback functions based on the status change?
//Resolve scenario
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Food truck found
    //Change status from 'pending' to 'fulfilled
    resolve("Bringing tacos");
  }, 5000);
});

//Reject scenario
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Food truck not found
    //Change status from 'pending' to 'rejected' by calling reject() func
    // whatever you pass as an argument for the reject() automatically it gets as argument for the
    reject("Not bringing tacos. Food truck not there.");
  }, 5000);
});

//SUCCESS and FAILURE callbacks
const onFulfillment = (result) => {
  //resolve was called
  console.log(result);
  console.log("Set up the table to eat tacos");
};

const onRejection = (error) => {
  //reject was called
  console.log(error);
  console.log("Start cooking pasta, No tacos.");
};
promise1.then(onFulfillment);
promise2.catch(onRejection);

// -----PROMISE - part 3
// Promise.all() method
const promiseOne = Promise.resolve(3); //immediatly resolves
const promiseTwo = 32; //isn't really a promise
const promiseTree = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo"); //resolves after 0.1 sec
});
Promise.all([promiseOne, promiseTwo, promiseTree]).then((value) => {
  console.log(value);
}); //expected output: Array [3, 32, 'foo]
