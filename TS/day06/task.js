// day 6 : Arrays
// Activity 1: Array Creation and Access
// task1 :  Create an array of numbers from 1 to 5 and log the array to the console.
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// task 2 :  Access the first and last elements of the array and log them to the console.
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
// Activity 2: Array Methods (Basic)
// task 3 :  use the push()  method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log(numbers);
// task 4 : use the pop()  method to remove the last element from the array and log the updated array.
numbers.pop();
console.log(numbers);
// task 5 :  use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log(numbers);
// task 6 : use the unshift  method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(1);
console.log(numbers);
// Activity 3: Array Methods (Intermediate)
// task 7 : use map  method to create a new array where each number is doubled and log the new array.
var double = numbers.map(function (num) { return num * 2; });
console.log(double);
// task 8: use the filter  method to create a new array with only even numbers and log the new array.
var even = numbers.filter(function (num) { return num % 2 === 0; });
console.log(even);
// task 9 : use the reduce  method to calculate the sum of all numbers in the array and log the result.
var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
console.log(sum);
// Activity 4: Array Iteration
// task 10 : use for  loop to iterate over the array and log each element to the console.
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// task 11 : use the foreach  method to iterate over the array and log each element to the console.
numbers.forEach(function (num) { return console.log(num); });
// Activity 5: Multi-dimensional Arrays
// task 12 :  Create a two-dimensional array (matrix) and log the entire array to the console.
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix);
// task 13 :  Access and log a specific element from the two-dimensional array.
console.log(matrix[1][2]);
