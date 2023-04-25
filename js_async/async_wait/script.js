//--------Async /  Await
//Async keyword is used to declare async function.
//Unlike normal functions  async function always return a promise.
//normal function example:
function greet() {
  return "Hello, from normal func";
}
console.log(greet());

//async function example
async function greetAsyncFn() {
  return "Hello from async func";
}

console.log(greetAsyncFn());

//or can immediately resolve the promise by re-writting code:
async function greetAsyncFn2() {
  return Promise.resolve(
    "Hello from async func, the value printed using .then()"
  );
}

greetAsyncFn2().then((value) => console.log(value));

// Await -  The keyword await makes JavaScript wait until that promise settles and returns its result.
// await only works inside async functions.
async function greetWithAwait() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello from async/awiat"), 1000);
  });
  let result = await promise; //wait until the promise resolves
  console.log(result);
}

greetWithAwait();
