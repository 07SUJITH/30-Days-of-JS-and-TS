// Function to simulate a promise that rejects with an error message after a delay
function fetchWithError(message, delay, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(message));
      } else {
        resolve("Data fetched successfully!");
      }
    }, delay);
  });
}

// Async function that handles a rejected promise and logs the error message
async function handleRejectedPromise() {
  try {
    // Await the promise and store the resolved value
    const result = await fetchWithError("Something went wrong!", 2000, true);
    // Log the result if the promise resolves (though in this example it won't)
    console.log(result);
  } catch (error) {
    // Handle and log the error message
    console.error("Promise rejected:", error.message);
  }
}

// Call the async function
handleRejectedPromise();
