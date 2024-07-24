//Day 11: Promises and Async/Await
//Activity 1: Understanding Promises

// task1 :  Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

function createDelayedMessagePromise() {
  // Return a new Promise object
  return new Promise((resolve, reject) => {
    // Use setTimeout to delay the execution by 2000 milliseconds (2 seconds)
    setTimeout(() => {
      // Resolve the promise with a message
      resolve("This is the message after 2 seconds");
    }, 2000);
  });
}

// Call the function to create the promise
const delayedMessagePromise = createDelayedMessagePromise();

// Use the .then() method to handle the resolved promise
delayedMessagePromise.then((message) => {
  // Log the resolved message to the console
  console.log(message);
});

/*
Promise Creation:

return new Promise((resolve, reject) => { ... });
This line creates a new promise. The function inside the Promise constructor is called immediately when the promise is created.
setTimeout Inside the Promise:

setTimeout(() => { ... }, 2000);
This line sets up a timer to wait for 2 seconds before executing the code inside its callback.
Resolving the Promise:

resolve("This is the message after 2 seconds");
After 2 seconds, the resolve function is called with the message "This is the message after 2 seconds".
Calling resolve changes the state of the promise from "pending" to "fulfilled" and passes the value "This is the message after 2 seconds" to the promise's handlers.
Handling the Resolved Promise:

delayedMessagePromise.then((message) => { ... });
The .then() method is used to specify what should happen when the promise is fulfilled.
The function inside .then() receives the value passed to resolve, which in this case is the message "This is the message after 2 seconds".
Logging the Message:

console.log(message);
Inside the .then() method, we log the resolved message to the console
*/
