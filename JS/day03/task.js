//  Control Structures

//Activity 1: If-Else Statements

// task 1 :  Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number1 = 5;

if (number1 > 0) {
  console.log("The number is positive");
} else if (number1 < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// task2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 17;

if (age >= 18) {
  console.log("The person is eligible to vote");
} else {
  console.log("The person is not eligible to vote");
}

// Activity 2: Nested If-Else Statements

// task 3 :  Write a program to find the largest of three numbers using nested if-else statements.

let number2 = 5;
let number3 = 10;
let number4 = 15;

if (number2 > number3) {
  if (number2 > number4) {
    console.log("The largest number is: " + number2);
  } else {
    console.log("The largest number is: " + number4);
  }
} else {
  if (number3 > number4) {
    console.log("The largest number is: " + number3);
  } else {
    console.log("The largest number is: " + number4);
  }
}

// Activity 3: Switch Case
// task 4:  Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
}

// task 5 :  Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 80;

switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}

//  Activity 4: Conditional (Ternary) Operator

// task6 :  Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number5 = 5;

let result = number5 % 2 === 0 ? "even" : "odd";

console.log("The  number is: " + result);

// Activity 5: Combining Conditions

// task 7  Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("The year is a leap year");
} else {
  console.log("The year is not a leap year");
}
