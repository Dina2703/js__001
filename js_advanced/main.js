console.log("Hi, from advanced");
//Nested function's scope
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
//   console.log(a, b, c);
// }
// outer();

//Closure
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer(); //1
outer(); //1

function outer2() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner; //returning inner func from the outer func, in such situations it returns the inner function as well as its scope, and in this scope we have just one variable called counter initialized to zero.So we have the inner func bundled together with the variable 'counter', which is togetrher termed as a CLOSURE. and in such situations the function will persist or remember the value of the counter variable.
}
const fn = outer2();
fn(); //1, after fn() logged the value of 'counter', it remembers the counter value(which is 1 at this stage).
fn(); //2

//interview trick question about closure
//with 'var' it will log '3, 3, 3'
for (var i = 0; i < 3; i++) {
  const log = () => {
    debugger;
    console.log(i); //3, 3, 3
  };
  setTimeout(log, 100);
}
//with 'let' it will log '0, 1, 2'
for (let i = 0; i < 3; i++) {
  const log = () => {
    debugger;
    console.log(i); //0, 1, 2;
  };
  setTimeout(log, 100);
}

//--------Currying-------
//In JavaScript, "carrying" refers to the process of transforming a function that takes multiple arguments into a series of functions that take one argument at a time. Here are some practical applications of carrying in JavaScript:
//Function composition: Carrying makes it easy to compose complex functions by breaking them down into simpler, reusable parts.
const calculateTotalCost = (price, quantity) => price * quantity;
const applyDiscount = (discount, amount) => amount - amount * discount;

const applyDiscountToTotalCost = (discount) => (price, quantity) =>
  applyDiscount(discount, calculateTotalCost(price, quantity));

const tenPercentDiscount = applyDiscountToTotalCost(0.1);
const discountedTotalCost = tenPercentDiscount(50, 2); // returns 90

//Delayed execution: Carrying can be used to create functions that delay execution until all necessary arguments are provided.
const add = (a, b) => a + b;
const delayExecution =
  (fn, ...args) =>
  () =>
    fn(...args);

const delayedAdd = delayExecution(add, 2, 3);
const result = delayedAdd(); // returns 5

//Callback functions: Carrying can also be used to create callback functions that take a single argument. This can be useful when you need to pass a function as an argument to another function, but the receiving function only expects a single argument.
//Error handling: Carrying can be used to create error-handling functions that take a single argument and return a boolean value indicating whether an error occurred. This can be useful in cases where you want to check for errors at different stages of your code, and handle them in a consistent manner.
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

const safeDivide =
  (fn) =>
  (...args) => {
    try {
      return fn(...args);
    } catch (e) {
      console.error(e.message);
      return null;
    }
  };

const safeDivideBy = safeDivide(divide);
const result1 = safeDivideBy(10, 2); // returns 5
const result2 = safeDivideBy(10, 0); // logs "Cannot divide by zero" and returns null
