// Function to create a promise that rejects with an error message after a 2-second timeout
function createErrorPromise() {
  // Return a new Promise object
  return new Promise((resolve, reject) => {
    // Use setTimeout to delay the execution by 2000 milliseconds (2 seconds)
    setTimeout(() => {
      // Reject the promise with an error message after 2 seconds
      reject(new Error("This is an error message after 2 seconds"));
    }, 2000);
  });
}

// Call the function to create the promise
const errorPromise = createErrorPromise();

// Use the .catch() method to handle the rejected promise
errorPromise
  .then((message) => {
    // This part will not execute since the promise is rejected
    console.log(message);
  })
  .catch((error) => {
    // Log the error message to the console
    console.error("Promise rejected:", error.message);
  });

/*
  Promise Creation:

return new Promise((resolve, reject) => { ... });
This line creates a new promise. The function inside the Promise constructor is called immediately when the promise is created.
setTimeout Inside the Promise:

setTimeout(() => { ... }, 2000);
This line sets up a timer to wait for 2 seconds before executing the code inside its callback.
Rejecting the Promise:

reject(new Error("This is an error message after 2 seconds"));
After 2 seconds, the reject function is called with an Error object containing the message "This is an error message after 2 seconds".
Calling reject changes the state of the promise from "pending" to "rejected" and passes the error object to the promise's handlers.
Handling the Rejected Promise:

errorPromise.then((message) => { ... }).catch((error) => { ... });
The .then() method is used to specify what should happen when the promise is fulfilled. However, since the promise is rejected, this part will not execute.
The .catch() method is used to handle the rejected promise. It receives the error object passed to reject.
Logging the Error:

console.error("Promise rejected:", error.message);
Inside the .catch() method, we log the error message to the console using console.error.
  */
