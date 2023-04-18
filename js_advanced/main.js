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
