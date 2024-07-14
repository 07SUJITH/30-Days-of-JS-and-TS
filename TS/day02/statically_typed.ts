/*
TypeScript's Type Checking
TypeScript is a statically typed language, which means it performs type checking at compile time. This is different from JavaScript, which is dynamically typed and performs type checking at runtime. Some key points to note:
Type Safety: TypeScript enforces type safety by ensuring that operations between incompatible types are caught at compile time. This helps in identifying potential bugs early in the development process.
Compile-time Errors: Errors like the ones you encountered are caught at compile time, which means you get immediate feedback about type-related issues.
Type Annotations: TypeScript allows you to specify types explicitly, which makes your code more predictable and easier to understand.
*/

// Define two numbers
let number17: string = '5'; 
let number18: number = 5;

// Compare the two numbers
let result3: boolean = number17 == number18;

// Log the result to the console
console.log("The result of number17 == number18 is: " + result3);

let result4: boolean = number17 === number18;
console.log("The result of number17 === number18 is: " + result4);


/*

 error TS2367: This condition will always return 'false' since the types 'string' and 'number' have no overlap.

14 let result3: boolean = number17 == number18;
                          ~~~~~~~~~~~~~~~~~~~~

statically_typed.ts:19:24 - error TS2367: This condition will always return 'false' since the types 'string' and 'number' have no overlap.

19 let result4: boolean = number17 === number18;
                          ~~~~~~~~~~~~~~~~~~~~~


Found 2 errors in the same file, starting at: statically_typed.ts:14
*/