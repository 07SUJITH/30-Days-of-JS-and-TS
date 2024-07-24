// Define the function to simulate a promise that rejects with an error message after a delay
function fetchWithError(
  message: string,
  delay: number,
  shouldReject: boolean
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(message));
      } else {
        resolve("Data fetched successfully!");
      }
    }, delay);
  });
}

// Define an async function that handles a rejected promise and logs the error message
async function handleRejectedPromise(): Promise<void> {
  try {
    // Await the promise and store the resolved value
    const result: string = await fetchWithError(
      "Something went wrong!",
      2000,
      true
    );
    // Log the result if the promise resolves (though in this example it won't)
    console.log(result);
  } catch (error) {
    // Handle and log the error message
    if (error instanceof Error) {
      console.error("Promise rejected:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

// Call the async function
handleRejectedPromise();
