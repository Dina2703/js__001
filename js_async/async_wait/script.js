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

//--Sequential VS concurrent VS parallel executions

function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("Hello");
    }, 2000); //logs after 2 sec
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("World"); //logs after 1 sec
    }, 1000);
  });
}
//Sequential execution. With this way the total execution takes 3 sec( 2 + 1)

async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello);

  const world = await resolveWorld();
  console.log(world);
}

sequentialStart(); //total time take = 3sec

//Concurrent execution. With this way the total execution takes 2 sec.

async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();

  console.log(await hello);
  console.log(await world);
}

concurrentStart(); //Total time taken = 2 sec

//Parallel execution.
//Parallel execution example with normal func()
function parallel() {
  Promise.all([
    (async () => console.log(await resolveHello()))(),
    (async () => console.log(await resolveWorld()))(),
  ]);
}

parallel(); //logged 'World', "Hello"

//Parallel execution example with async func()
async function parallelAsync() {
  await Promise.all([
    (async () => console.log(await resolveHello()))(),
    (async () => console.log(await resolveWorld()))(),
  ]);
  console.log("Finally");
}

parallelAsync(); //logs "World", "Hello", "Finally"
