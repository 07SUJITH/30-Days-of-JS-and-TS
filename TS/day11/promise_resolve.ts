// Function to create a promise that resolves with a message after a 2-second timeout
function createDelayedMessagePromise(): Promise<string> {
  // Return a new Promise object
  return new Promise<string>((resolve) => {
    // Use setTimeout to delay the execution by 2000 milliseconds (2 seconds)
    setTimeout(() => {
      // Resolve the promise with a message
      resolve("This is the message after 2 seconds");
    }, 2000);
  });
}

// Call the function to create the promise
const delayedMessagePromise: Promise<string> = createDelayedMessagePromise();

// Use the .then() method to handle the resolved promise
delayedMessagePromise.then((message: string) => {
  // Log the resolved message to the console
  console.log(message);
});
