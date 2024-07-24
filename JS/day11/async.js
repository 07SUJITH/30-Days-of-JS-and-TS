//  Write an async function that waits for a promise to resolve and then logs the resolved value.
// Function to simulate a promise that resolves after a delay
function fetchData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Async function that waits for the promise to resolve and logs the resolved value
async function logResolvedValue() {
  try {
    // Wait for the promise to resolve and store the resolved value
    const resolvedValue = await fetchData("Data fetched successfully!", 2000);
    // Log the resolved value to the console
    console.log(resolvedValue);
  } catch (error) {
    // Handle any potential errors
    console.error("Error:", error.message);
  }
}

// Call the async function
logResolvedValue();

/*
Async Function (logResolvedValue):

async function logResolvedValue() { ... } defines an asynchronous function.
Inside the function, we use the await keyword to wait for the promise returned by fetchData to resolve.
The resolved value is stored in the resolvedValue variable.
async/await syntax, we can write asynchronous code that is easy to read and understand, waiting for promises to resolve before proceeding.
*/
