// welcome to 30DaysOfJavaScript for Day 1 in typescript
// follow this git repository for more updates:
//  ----------------------- Activity 1 variable declaration
var number = 5;
var string = "Hello World";
console.log(number);
console.log(string);
// * output:
// * 5
// * Hello World
//  ----------------------- Activity 2 Constant declaration
var isLoggedIn = true;
console.log(isLoggedIn);
var number2 = 5;
var string2 = "Hello World";
var isAdmin = true;
var array = [1, 2, 3, 4, 5];
var object = { name: "John", age: 25 };
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
var num1 = 25;
console.log("number: " + num1);
num1: number = 45;
console.log("number: " + num1);
/**
 * Output:
 * number:  25
 * number:  45
 */
//  ----------------------- Activity 5 understanding const
var user = "John";
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
