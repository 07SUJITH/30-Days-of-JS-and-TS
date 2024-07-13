// -----activity 1 variable declaration-----

// variable can declare using both let and var
// but var has some limitations like hoisting and global scope
// in production environment we use let
// let has block scope

// problem 1 : variable hoisting

// hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution
console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted!";
console.log(hoistedVar); // "I'm hoisted!"

// Using let

try {
  console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
} catch (e) {
  console.log("Oops! Let doesn't let you do that.");
}
let hoistedLet = "I'm not hoisted!";
console.log(hoistedLet); // I'm not hoisted!

// Problem 2: Function Scope

function varFunctionScope() {
  var x = "I'm inside the function!";
  if (true) {
    var x = "I'm still inside the function!";
    console.log(x); // I'm still inside the function!
  }
  console.log(x); // I'm still inside the function!
}
varFunctionScope();

function letBlockScope() {
  let y = "I'm inside the function!";
  if (true) {
    let y = "I'm inside the block!";
    console.log(y); // I'm inside the block!
  }
  console.log(y); // I'm inside the function!
}
letBlockScope();

// Problem 3: Global Scope Pollution

// use var
if (true) {
  var globalVar = "I'm global!";
}
console.log(globalVar); // I'm global!

// use let

if (true) {
  let blockScopedLet = "I'm block-scoped!";
}
try {
  console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
} catch (e) {
  console.log("I'm safe and sound within my block!");
}

// Problem 4: Loop Scope

// using var
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop: " + i); // Prints "var loop: 3" three times
  }, 1000);
}

// using let
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let loop: " + j); // Prints "let loop: 0", "let loop: 1", "let loop: 2"
  }, 1000);
}

// Problem 5: Redeclaration

// using var
var redeclaredVar = "First declaration!";
var redeclaredVar = "Oops! I did it again!";
console.log(redeclaredVar); // Oops! I did it again!

// using let
let redeclaredLet = "First declaration!";
try {
  let redeclaredLet = "Oops! I did it again!"; // SyntaxError: Identifier 'redeclaredLet' has already been declared
} catch (e) {
  console.log("Let doesn't let you redeclare!");
}

/* 
Using var can lead to unexpected behavior due to hoisting, lack of block scope, global scope pollution, issues with loop scope, and redeclaration problems. Switching to let helps avoid these pitfalls by providing block scope, preventing redeclaration, and ensuring variables are not accessed before they are initialized. So, remember: "Let" your variables be safe and sound!
*/

//--------activity 2 const declaration-----

// use const
const pi = 3.14159;
console.log(pi); // 3.14159

try {
  pi = 3.14; // TypeError: Assignment to constant variable.
} catch (e) {
  console.log("Oops! Can't reassign a const variable.");
}
// array example
const fruits = ["apple", "banana"];
console.log(fruits); // [ 'apple', 'banana' ]

fruits.push("orange");
console.log(fruits); // [ 'apple', 'banana', 'orange' ]

try {
  fruits = ["grape", "mango"]; // TypeError: Assignment to constant variable.
} catch (e) {
  console.log("Oops! Can't reassign a const array.");
}

// const is block scope
if (true) {
  const message = "Hello from inside the block!";
  console.log(message); // Hello from inside the block!
}

try {
  console.log(message); // ReferenceError: message is not defined
} catch (e) {
  console.log("Oops! Can't access a const variable outside its block scope.");
}

// hoisting
try {
  console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
} catch (e) {
  console.log("Oops! Const variables are not hoisted.");
}
const hoistedConst = "I'm not hoisted!";
console.log(hoistedConst); // I'm not hoisted!

// -------------- activity 3 data types ------------

// Number: Represents numeric data, including integers and floating-point numbers.

let age = 25;
const PI = 3.14;

//String: Represents textual data enclosed within single ' or double " quotes.

let name = "Alice";
let message = "Hello, world!";

// Boolean: Represents a logical value indicating true or false.

let isStudent = true;
let isOpen = false;

// Undefined: Represents a variable that has been declared but not assigned a value.

let x;
console.log(x); // undefined

// Null: Represents an intentional absence of any object value.

let y = null;

// Object: Represents a collection of key-value pairs.

let person = {
  name: "Bob",
  age: 30,
  city: "New York",
};


console.log(typeof 42);        // "number"
console.log(typeof 'Hello');   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof value);     // "undefined"
console.log(typeof null);      // "object" (unfortunately, this is a known quirk in JavaScript)
console.log(typeof Symbol());  // "symbol"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof function(){}); // "function"

//  ----------------------- Activity 4 Reassignging variables

let num1 = 25;
console.log("number: " + num1);

num1 = 45;
console.log("number: " + num1);

/**
 * Output:
 * number:  25
 * number:  45
 */

//  ----------------------- Activity 5 understanding const

const user = "John";

console.log(user); // Output: John

user = "Doe"; // This line causes an error

// TypeError: Assignment to constant variable.
