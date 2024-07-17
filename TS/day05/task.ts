// Day 5: Functions

// Activity 1: Function Declaration

// task1 :  Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(number: number): void {
    if (number % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}

checkEvenOdd(5);

// task 2 :  Write a function to calculate the square of a number and return the result.

function square(number: number): number {
    return number * number;
}

console.log(square(5));

//Activity 2: Function Expression

// task 3:  Write a function expression to find the maximum of two numbers and log the result to the console.

let number1: number = 5;
let number2: number = 10;

let findMax = function(a: number, b: number): number {
    return a > b ? a : b;
};

let maximum: number = findMax(number1, number2);
console.log("The maximum number is: " + maximum);

// task 4:  Write a function expression to concatenate two strings and return the result.

const str1: string = "Hello";
const str2: string = "World";

const concatenate = function(a: string, b: string): string {
    return a + b;
};

const result: string = concatenate(str1, str2);
console.log(result);

// Activity 3: Arrow Functions

// task 5 :  Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (a: number, b: number): number => a + b;
console.log(sum(5, 10));    

// task 6:  Write an arrow function to check if a string contains a specific character and return a boolean value.

const string: string = "Hello, World!";
const containsChar = (str: string, char: string): boolean => str.includes(char);

console.log(containsChar(string, "o"));
console.log(containsChar(string, "s"));

// Activity 4: Function Parameters and Default Values

// task 7 :  Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const multiply = (a: number, b: number = 1): number => {
    return a * b;
}

console.log(multiply(5, 10));
console.log(multiply(5));

// task 8 :  Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greeting = (name: string, age: number = 18): string => {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greeting("John"));
console.log(greeting("John", 25));

// Activity 5: Higher-Order Functions

// task 9 :  Write a higher-order function that takes a function and a number, and calls the function that many times.

const func = (): void => {
    console.log("Hello, World!");
}

const repeat = (func: () => void, times: number): void => {
    for (let i = 0; i < times; i++) {
        func();
    }
}

repeat(func, 5);

// task 10 :  Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const applyFunctions = (func1: (val: number) => number, func2: (val: number) => number, value: number): number => {
    const result1 = func1(value);
    const finalResult = func2(result1);
    return finalResult;
};

const add = (a: number, b: number = 1): number => a + b;
const subtract = (a: number, b: number = 0): number => a - b;

console.log(applyFunctions((val) => add(val, 5), (val) => subtract(val, 3), 5));


// tsc --target es2015 task.ts
// since includes property of string is available from es6 or later (es2015)