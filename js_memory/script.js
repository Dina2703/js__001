//Primitive types storated on the 'Stack'. Primitive type data has fixed size.
let fname = "Anna";
let age = 20;

let newName = fname;
newName = "Jane";

console.log(fname); //'Anna'
console.log(newName); //'Jane'

//Non-Promitive types or Reference types, like  arrays, object, function, stored in 'Heap'.Reference types  have not fixed size, means when you create them they don't have fixed data size, they can add more to them, So they need more space.

let person = {
  name: "Sam",
  age: 30,
};

let newPerson = person;

newPerson.name = "Suzanne";

console.log(person.name); //'Suzanne' because they both pointing
console.log(newPerson.name); //'Suzanne'

//Devtools Memory tab
function Person(name) {
  this.name = name;
}

const person1 = new Person("Gia");
const person2 = new Person("Moa");
const person3 = new Person("Gray");

//open 'inspector' => ''Memory' => click btn 'Take snapshot' => use 'Class filter' to find 'Person' class and can check the sizes of its instances. If you have memory leak you should see a crazy amount of memories used for the objects.
