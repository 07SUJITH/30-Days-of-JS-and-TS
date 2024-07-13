// welcome to 30DaysOfJavaScript for Day 1 in typescript

// follow this git repository for more updates:

//  ----------------------- Activity 1 variable declaration

var number: Number = 5;
var string: string = "Hello World";

console.log(number);
console.log(string);

// * output:
// * 5
// * Hello World

//  ----------------------- Activity 2 Constant declaration

const isLoggedIn: boolean = true;

console.log(isLoggedIn);

// * output:
// * true

//  ----------------------- Activity 3 Data types

interface User {
	name: string;
	age: number;
}

let number2: number = 5;
let string2: string = "Hello World";
let isAdmin: boolean = true;
let array: number[] = [1, 2, 3, 4, 5];
let object: User = { name: "John", age: 25 };

console.log(number2);
console.log(string2);
console.log(isAdmin);
console.log(array);
console.log(object);

// * output:
// 5
// * Hello World
// * true
// * [ 1, 2, 3, 4, 5 ]
// * { name: 'John', age: 25 }

//  ----------------------- Activity 4 Reassignging variables

let num1: number = 25;
console.log("number: " + num1);

num1: number = 45;
console.log("number: " + num1);

/**
 * Output:
 * number:  25
 * number:  45
 */

//  ----------------------- Activity 5 understanding const

const user: string = "John";

console.log(user);

// output:
// * John

// user = "Doe";
/*
day1.ts:75:1 - error TS2588: Cannot assign to 'user' because it is a constant.
75 user = "Doe";
   ~~~~
Found 1 error in day1.ts:75
*/

/*
Compile the TypeScript file using the TypeScript compiler (tsc)
tsc day1.ts
This will generate a JavaScript file (day1.js) in the same directory.
node day1.js

*/