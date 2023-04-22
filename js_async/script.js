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

setTimeout(myStopFunction, 10000); //it will stop the interval function after 10 sec.
