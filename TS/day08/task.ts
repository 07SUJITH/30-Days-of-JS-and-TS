// Day 8: ES6+ Features

// Activity 1: Template Literals

// task 1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
// Define the variables
const name: string = "sujith";
const age: number = 21;

// Create the string using template literals
const message: string = `Hello, my name is ${name} and I am ${age} years old.`;

// Log the string to the console
console.log(message);

/* 
Template Literals: Enclosed in backticks (``), template literals allow for embedded expressions.
Variables: Inside the template literal, ${name} and ${age} are placeholders that will be replaced by the values of name and age respectively.
*/

// task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString: string = `
Hello,
This is a multi-line string created using template literals.
It can span multiple lines and preserve line breaks,
making it useful for formatting text.

Best regards,
Your Name
`;

// Log the multi-line string to the console
console.log(multiLineString);

/*
Multi-Line String: By using backticks (``), you can include line breaks directly in the string.
Preserved Formatting: The line breaks and indentation within the backticks are preserved when the string is logged or used.
*/

// Activity 2: Destructuring

// task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
// Define an array of numbers
const numbers: number[] = [10, 20, 30, 40, 50];

// Use array destructuring to extract the first and second elements
const [first, second]: number[] = numbers;

// Log the extracted elements to the console
console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// task 4 : Use object destructuring to extract the title and author from a book object and log them to the console.
// Define a book object
const book: { title: string; author: string; year: number; genre: string } = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Novel",
};

// Use object destructuring to extract title and author
const { title, author }: { title: string; author: string } = book;

// Log the extracted values to the console
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

/*
Object Destructuring: This syntax allows you to extract properties from an object into variables. The syntax { title, author } extracts the title and author properties from the book object.
*/

// Activity 3: Spread and Rest Operators

// task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
// Define an existing array
const existingArray: number[] = [1, 2, 3, 4, 5];

// Create a new array using the spread operator
const newArray: number[] = [...existingArray, 6, 7, 8];

// Log the new array to the console
console.log(newArray);

// Object Property Updates: You can use the spread operator to update specific properties in an object without mutating the original object.
const person: { name: string; age: number } = { name: "Alice", age: 25 };
const updatedPerson: { name: string; age: number } = { ...person, age: 26 };
console.log(updatedPerson); // { name: 'Alice', age: 26 }

/*
Spread Operator: The spread operator (...) allows you to expand an array into its individual elements. By using ...existingArray, you include all elements of existingArray in the newArray.
Additional Elements: You can add more elements to the new array directly after the spread operator
*/

// task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
// Define a function that uses the rest operator to accept an arbitrary number of arguments
function sum(...numbers: number[]): number {
  // Use the reduce method to sum all arguments
  return numbers.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );
}

// Example usage
const result: number = sum(1, 2, 3, 4, 5);
console.log(result); // 15

/*
Rest Operator (...): In the function parameter list, ...numbers gathers all arguments passed to the function into an array named numbers.
reduce Method: The reduce method is used to iterate over the array and accumulate the sum of all its elements. The 0 in the reduce method represents the initial value of the accumulator.
*/

// Activity 4: Default Parameters

// task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

// Define the function with default parameter value
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Example usage
const resultWithTwoParams: number = multiply(5, 3); // 5 * 3
const resultWithOneParam: number = multiply(5); // 5 * 1 (default value)

// Log the results
console.log(`Result with two parameters (5, 3): ${resultWithTwoParams}`); // 15
console.log(`Result with one parameter (5): ${resultWithOneParam}`); // 5

// Activity 5: Enhanced Object Literals

// task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// Define properties
const name1: string = "John Doe";
const age2: number = 30;

// Define a method
function greet(this: { name1: string; age2: number }): string {
  return `Hello, my name is ${this.name1} and I am ${this.age2} years old.`;
}

// Create an object using enhanced object literals
const person1 = {
  // Shorthand property names
  name1,
  age2,

  // Method definition shorthand
  greet,

  // Additional method
  updateAge(newAge: number): void {
    this.age2 = newAge;
  },
};

// Log the object to the console
console.log(person1);

// Call the greet method and log the result
console.log(person1.greet());

// Update the age and log the updated object
person1.updateAge(31);
console.log(person1);

// task 9: Create an object with computed property names based on variables and log the object to the console.

// Define variables for computed property names
const propName1: string = "firstName";
const propName2: string = "lastName";
const propName3: string = "age";

// Create an object using computed property names
const person2 = {
  [propName1]: "John",
  [propName2]: "Doe",
  [propName3]: 30,
};

// Log the object to the console
console.log(person2);

/*
Computed Property Names: The square bracket syntax allows you to use the values of variables as property names. For example, [propName1] will use the value of propName1 ('firstName') as the property name.
Object Creation: The person object is created with properties firstName, lastName, and age based on the values of propName1, propName2, and propName3 respectively.
*/
