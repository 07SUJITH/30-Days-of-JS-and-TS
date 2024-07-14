/*
TypeScript's Type Checking
TypeScript is a statically typed language, which means it performs type checking at compile time. This is different from JavaScript, which is dynamically typed and performs type checking at runtime. Some key points to note:
Type Safety: TypeScript enforces type safety by ensuring that operations between incompatible types are caught at compile time. This helps in identifying potential bugs early in the development process.
Compile-time Errors: Errors like the ones you encountered are caught at compile time, which means you get immediate feedback about type-related issues.
Type Annotations: TypeScript allows you to specify types explicitly, which makes your code more predictable and easier to understand.
*/
// Define two numbers
var number17 = '5';
var number18 = 5;
// Compare the two numbers
var result3 = number17 == number18;
// Log the result to the console
console.log("The result of number17 == number18 is: " + result3);
var result4 = number17 === number18;
console.log("The result of number17 === number18 is: " + result4);


/*
error will generate in typescript
but the compiled file is js which will run without any error since it is dynamically typed
The result of number17 == number18 is: true
The result of number17 === number18 is: false
*/