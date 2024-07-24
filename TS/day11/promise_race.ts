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

// Use Promise.race to get the first resolved or rejected promise
Promise.race([promise1, promise2, promise3])
  .then((value: string) => {
    // Log the value of the first resolved promise
    console.log("First promise resolved:", value);
  })
  .catch((error: Error) => {
    // Handle any errors that occur
    console.error("Error:", error.message);
  });
