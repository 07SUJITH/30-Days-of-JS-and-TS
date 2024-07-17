// Day 5: Functions

// Activity 1: Function Declaration

// task1 :  Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}

checkEvenOdd(5);

// task 2 :  Write a function to calculate the square of a number and return the result.

function square(number) {
    return number * number;
}

console.log(square(5));

//Activity 2: Function Expression

// task 3:  Write a function expression to find the maximum of two numbers and log the result to the console.

let number1 = 5;
let number2 = 10;

let findMax = function(a, b) {
    return a > b ? a : b;
};

let maximum = findMax(number1, number2);
console.log("The maximum number is: " + maximum);

// task 4:  Write a function expression to concatenate two strings and return the result.

const str1 = "Hello";
const str2 = "World";

const concatenate = function(a, b) {
    return a + b;
};

const result = concatenate(str1, str2);
console.log(result);


// Activity 3: Arrow Functions

// task 5 :  Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (a, b) => a + b;
console.log(sum(5, 10));    

//task 6:  Write an arrow function to check if a string contains a specific character and return a boolean value.

const string = "Hello, World!";
const containsChar = (string , char) => string.includes(char);

console.log(containsChar(string, "o"));
console.log(containsChar(string, "s"));

// Activity 4: Function Parameters and Default Values

// task 7 :  Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const  multiply = (a, b = 1) => {
    return a * b;
}

console.log(multiply(5, 10));
console.log(multiply(5));

// task 8 :  Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greeting = (name, age = 18) => {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Activity 5: Higher-Order Functions

// task 9 :  Write a higher-order function that takes a function and a number, and calls the function that many times.

const func = () => {
    console.log("Hello, World!");
}

const repeat = (func, times) => {
    for (let i = 0; i < times; i++) {
        func();
    }
}

repeat(func, 5);

// task 10 :  Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const applyFunctions = (func1, func2, value) => {
    const result1 = func1(value);
    const finalResult = func2(result1);
    return finalResult;
};

const add = (a, b = 1) => a + b;
const subtract = (a, b = 0) => a - b;

console.log(applyFunctions(add, subtract, 5));

