//----------- Activity 1: Arithmetic Operations.--------------  

//task1 -- Write a program to add two numbers and log the result to the console. 

// Define two numbers
let number1: number = 5;
let number2: number = 10;

// Add the two numbers
let sum: number = number1 + number2;

// Log the result to the console
console.log("The sum of " + number1 + " and " + number2 + " is: " + sum);

//task2 -- Write a program to subtract two numbers and log the result to the console.

// Define two numbers
let number3: number = 5;
let number4: number = 10;

// Subtract the two numbers
let difference: number = number3 - number4;

// Log the result to the console
console.log("The difference of " + number3 + " and " + number4 + " is: " + difference);

//task 3 - Write a program to multiply two numbers and log the result to the console.

// Define two numbers
let number5: number = 5;
let number6: number = 10;

// Multiply the two numbers
let product: number = number5 * number6;

// Log the result to the console
console.log("The product of " + number5 + " and " + number6 + " is: " + product);

// task4 - Write a program to divide two numbers and log the result to the console.

// Define two numbers
let number7: number = 5;
let number8: number = 10;

// Divide the two numbers
let quotient: number = number7 / number8;

// Log the result to the console
console.log("The quotient of " + number7 + " and " + number8 + " is: " + quotient);

// task 5 - Write a program to find the remainder when one number is divided by another and log the result to the console.

// Define two numbers
let number9: number = 5;
let number10: number = 10;

// Find the remainder
let remainder: number = number9 % number10;

// Log the result to the console
console.log("The remainder of " + number9 + " and " + number10 + " is: " + remainder);

// -------------Activity 2: Assignment Operators---------------

// task 6 - Use the += operator to add a number to the variable and log the result to the console.

// Define a variable
let number11: number = 5;

// Use the += operator
number11 += 10;

// Log the result to the console
console.log("The new value of number11 is: " + number11);

// task 7 - Use the -= operator to subtract a number from the variable and log the result to the console.

// Define a variable
let number12: number = 5;

// Use the -= operator
number12 -= 10;

// Log the result to the console
console.log("The new value of number12 is: " + number12);

// activity 3 comparison operators

// task 8 Write a program to compare two numbers using > and < operator and log the result to the console.

// Define two numbers
let number13: number = 5;
let number14: number = 10;

// Compare the two numbers
let result: boolean = number13 > number14;

// Log the result to the console
console.log("The result of number13 > number14 is: " + result);

// task 9 Write a program to compare two numbers using >= and <= operator and log the result to the console.

// Define two numbers
let number15: number = 5;
let number16: number = 10;

// Compare the two numbers
let result2: boolean = number15 >= number16;

// Log the result to the console
console.log("The result of number15 >= number16 is: " + result2);

//task 10 Write a program to compare two numbers using == and === operator and log the result to the console.

// Define two numbers
let number17: number = 5; // Changed to number
let number18: number = 5;

// Compare the two numbers
let result3: boolean = number17 == number18;

// Log the result to the console
console.log("The result of number17 == number18 is: " + result3);

let result4: boolean = number17 === number18;
console.log("The result of number17 === number18 is: " + result4);

// -----------Activity 4: Logical Operators---------------

// task 11 Write a program that uses the && operator to combine two conditions and log the result to the console.

// Define two conditions
let condition1: boolean = true;
let condition2: boolean = false;

// Combine the two conditions
let result5: boolean = condition1 && condition2;

// Log the result to the console
console.log("The result of condition1 && condition2 is: " + result5);

//task 12 : Write a program that uses the || operator to combine two conditions and log the result to the console.

let result6: boolean = condition1 || condition2;
console.log("The result of condition1 || condition2 is: " + result6);

//task 13 : Write a program that uses the ! operator to negate a condition and log the result to the console.

let result7: boolean = !condition1;
console.log("The result of !condition1 is: " + result7);

//-------Activity 5: Ternary Operators-------

// task 14 : Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

// Define a number
let number19: number = 5;

// Check if the number is positive or negative
let result8: string = number19 > 0 ? "positive" : "negative";

// Log the result to the console
console.log("The result of number19 > 0 is: " + result8);
