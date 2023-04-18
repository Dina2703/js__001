console.log("Hello");
const person = {
  name: "Anna",
  age: 27,
  isMarried: false,
};

console.log(person.age);

//ternary operator example
const isEven = 10 % 5 === 0 ? true : false;
console.log(isEven);

// ----------type conversions--------
//------implicit conversion
//using  adding operator, JS coverts the number string into string type, and then concatenates the operands
console.log(3 + "3");
//using subtract, divide, multiplication operators, JS converts the number string into number type then performs the math calculation.
console.log("4" - "2");
console.log("4" * "2");
console.log("4" / "2");
//if you tried to use a non-numeric string the value is a special value NaN
console.log("4" / "h");
//if you tried to use boolean with numeric string, false is treted as 0, and true as 1.
console.log("4" - true);
//null treated as 0, because it's falsy.
console.log("4" - null);
//using 'undefined' with a number and a number string will result a 'NaN'
console.log("4" - undefined);
console.log(8 + undefined);

//------explicit conversion, using built-in methods that are availbale in JS.
//to convert a string string or boolen to numeric type you can use the number global  method.
console.log(Number("10"));
console.log(Number(false));
console.log(Number(""));
//or use 'parseInt()' method for interger numbers
console.log(parseInt("10"));
//or use 'parseFloat()' method for float numbers
console.log(parseFloat("10.2"));

//to convert other data types to string
console.log(String(20));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log((200).toString());
//DON'T use toString() method with null and undefined, it will return an error.

//convert to boolean type
console.log(Boolean(3)); //true
console.log(Boolean("  ")); //true

console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("")); //false
console.log(Boolean(NaN)); //false

//equality
// const var1 = "";
// const var2 = 0;

// console.log(var1 == var2);
// console.log(var1 === var2);

//------------Conditional Statement---------

const num = 0;

if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is 0");
}

//------------Looping Code---------
//---For Loop----
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number " + i);
}

//---While Loop----
let j = 1;
while (j <= 5) {
  console.log("Iteration number " + j);
  j++;
}

//---Do...While Loop----

let l = 7;
do {
  console.log("Iteration number " + l);
  l++;
} while (l <= 5);

//---For...of Loop----

const numArray = [1, 2, 3, 4, 5];

for (const num of numArray) {
  console.log("Iteration number " + num);
}

//------Functions-----------

function add(a, b) {
  return a + b;
}
const sum = add(10, 20);
console.log(sum);

//using arrow function syntax
const subtract = (a, b) => a - b;
const different = subtract(20, 10);
console.log(different);

//-----------Scope------------

//Global Scope
//can be accessed inside a block and a function scope
const myName = "Ann";
const myAge = 33;

//Block scope
if (true) {
  let myNum = 1000;
  console.log(myNum);
  console.log(myAge + " from  block scope");
}

// console.log(myNum); // myNum is not defined, cannot access outside of a block

//Function scope
function testFn() {
  let myString = "hello";
  console.log(myString);
  console.log(myName + " from  function scope");
}

testFn();
// console.log(myString); // myString is not defined, cannot access outside of a function scope
