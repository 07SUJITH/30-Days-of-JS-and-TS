// Function to simulate fetching data with a delay and returning a promise
function fetchData(message: string, delay: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Create multiple promises
const promise1: Promise<string> = fetchData("Data from API 1", 1000);
const promise2: Promise<string> = fetchData("Data from API 2", 2000);
const promise3: Promise<string> = fetchData("Data from API 3", 3000);

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((values: string[]) => {
    // Log all resolved values
    console.log("All promises resolved:", values);
  })
  .catch((error: Error) => {
    // Handle any errors that occur
    console.error("Error:", error.message);
  });
