// Day 8: ES6+ Features
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var _a;
// Activity 1: Template Literals
// task 1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
// Define the variables
var name = "sujith";
var age = 21;
// Create the string using template literals
var message = "Hello, my name is "
  .concat(name, " and I am ")
  .concat(age, " years old.");
// Log the string to the console
console.log(message);
/*
Template Literals: Enclosed in backticks (``), template literals allow for embedded expressions.
Variables: Inside the template literal, ${name} and ${age} are placeholders that will be replaced by the values of name and age respectively.
*/
// task 2: Create a multi-line string using template literals and log it to the console.
var multiLineString =
  "\nHello,\nThis is a multi-line string created using template literals.\nIt can span multiple lines and preserve line breaks,\nmaking it useful for formatting text.\n\nBest regards,\nYour Name\n";
// Log the multi-line string to the console
console.log(multiLineString);
/*
Multi-Line String: By using backticks (``), you can include line breaks directly in the string.
Preserved Formatting: The line breaks and indentation within the backticks are preserved when the string is logged or used.
*/
// Activity 2: Destructuring
// task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
// Define an array of numbers
var numbers = [10, 20, 30, 40, 50];
// Use array destructuring to extract the first and second elements
var first = numbers[0],
  second = numbers[1];
// Log the extracted elements to the console
console.log("First element: ".concat(first));
console.log("Second element: ".concat(second));
// task 4 : Use object destructuring to extract the title and author from a book object and log them to the console.
// Define a book object
var book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Novel",
};
// Use object destructuring to extract title and author
var title = book.title,
  author = book.author;
// Log the extracted values to the console
console.log("Title: ".concat(title));
console.log("Author: ".concat(author));
/*
Object Destructuring: This syntax allows you to extract properties from an object into variables. The syntax { title, author } extracts the title and author properties from the book object.
*/
// Activity 3: Spread and Rest Operators
// task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
// Define an existing array
var existingArray = [1, 2, 3, 4, 5];
// Create a new array using the spread operator
var newArray = __spreadArray(
  __spreadArray([], existingArray, true),
  [6, 7, 8],
  false
);
// Log the new array to the console
console.log(newArray);
// Object Property Updates: You can use the spread operator to update specific properties in an object without mutating the original object.
var person = { name: "Alice", age: 25 };
var updatedPerson = __assign(__assign({}, person), { age: 26 });
console.log(updatedPerson); // { name: 'Alice', age: 26 }
/*
Spread Operator: The spread operator (...) allows you to expand an array into its individual elements. By using ...existingArray, you include all elements of existingArray in the newArray.
Additional Elements: You can add more elements to the new array directly after the spread operator
*/
// task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
// Define a function that uses the rest operator to accept an arbitrary number of arguments
function sum() {
  var numbers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    numbers[_i] = arguments[_i];
  }
  // Use the reduce method to sum all arguments
  return numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}
// Example usage
var result = sum(1, 2, 3, 4, 5);
console.log(result); // 15
/*
Rest Operator (...): In the function parameter list, ...numbers gathers all arguments passed to the function into an array named numbers.
reduce Method: The reduce method is used to iterate over the array and accumulate the sum of all its elements. The 0 in the reduce method represents the initial value of the accumulator.
*/
// Activity 4: Default Parameters
// task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
// Define the function with default parameter value
function multiply(a, b) {
  if (b === void 0) {
    b = 1;
  }
  return a * b;
}
// Example usage
var resultWithTwoParams = multiply(5, 3); // 5 * 3
var resultWithOneParam = multiply(5); // 5 * 1 (default value)
// Log the results
console.log("Result with two parameters (5, 3): ".concat(resultWithTwoParams)); // 15
console.log("Result with one parameter (5): ".concat(resultWithOneParam)); // 5
// Activity 5: Enhanced Object Literals
// task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
// Define properties
var name1 = "John Doe";
var age2 = 30;
// Define a method
function greet() {
  return "Hello, my name is "
    .concat(this.name1, " and I am ")
    .concat(this.age2, " years old.");
}
// Create an object using enhanced object literals
var person1 = {
  // Shorthand property names
  name1: name1,
  age2: age2,
  // Method definition shorthand
  greet: greet,
  // Additional method
  updateAge: function (newAge) {
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
var propName1 = "firstName";
var propName2 = "lastName";
var propName3 = "age";
// Create an object using computed property names
var person2 =
  ((_a = {}),
  (_a[propName1] = "John"),
  (_a[propName2] = "Doe"),
  (_a[propName3] = 30),
  _a);
// Log the object to the console
console.log(person2);
/*
Computed Property Names: The square bracket syntax allows you to use the values of variables as property names. For example, [propName1] will use the value of propName1 ('firstName') as the property name.
Object Creation: The person object is created with properties firstName, lastName, and age based on the values of propName1, propName2, and propName3 respectively.
*/
