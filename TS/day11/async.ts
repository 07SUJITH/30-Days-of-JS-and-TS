// Function to simulate a promise that resolves after a delay
function fetchData(message: string, delay: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Async function that waits for the promise to resolve and logs the resolved value
async function logResolvedValue(): Promise<void> {
  try {
    // Wait for the promise to resolve and store the resolved value
    const resolvedValue: string = await fetchData(
      "Data fetched successfully!",
      2000
    );
    // Log the resolved value to the console
    console.log(resolvedValue);
  } catch (error) {
    // Handle any potential errors
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

// Call the async function
logResolvedValue();
