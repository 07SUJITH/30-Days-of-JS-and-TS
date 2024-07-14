//Comparison and Logical Operators Script
//: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

// Define two numbers
let number1 = 7;
let number2 = 10;

// Comparison operations
let isEqual = number1 == number2;
let isStrictEqual = number1 === number2;
let isNotEqual = number1 != number2;
let isStrictNotEqual = number1 !== number2;
let isGreaterThan = number1 > number2;
let isLessThan = number1 < number2;
let isGreaterOrEqual = number1 >= number2;
let isLessOrEqual = number1 <= number2;

// Logical operations
let andCondition = (number1 < number2) && (number1 > 0);
let orCondition = (number1 < number2) || (number1 < 0);
let notCondition = !(number1 == number2);

// Log the results to the console
console.log("Comparison Operators:");
console.log(number1 + " == " + number2 + " : " + isEqual);
console.log(number1 + " === " + number2 + " : " + isStrictEqual);
console.log(number1 + " != " + number2 + " : " + isNotEqual);
console.log(number1 + " !== " + number2 + " : " + isStrictNotEqual);
console.log(number1 + " > " + number2 + " : " + isGreaterThan);
console.log(number1 + " < " + number2 + " : " + isLessThan);
console.log(number1 + " >= " + number2 + " : " + isGreaterOrEqual);
console.log(number1 + " <= " + number2 + " : " + isLessOrEqual);

console.log("\nLogical Operators:");
console.log("(" + number1 + " < " + number2 + ") && (" + number1 + " > 0) : " + andCondition);
console.log("(" + number1 + " < " + number2 + ") || (" + number1 + " < 0) : " + orCondition);
console.log("!(" + number1 + " == " + number2 + ") : " + notCondition);
