// Function to simulate fetching data with a delay and returning a promise
function fetchData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Create multiple promises
const promise1 = fetchData("Data from API 1", 1000);
const promise2 = fetchData("Data from API 2", 2000);
const promise3 = fetchData("Data from API 3", 3000);

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    // Log all resolved values
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    // Handle any errors that occur
    console.error("Error:", error.message);
  });

/*
Using Promise.all:

Promise.all([promise1, promise2, promise3]) takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved.
The resulting promise resolves with an array of the resolved values from the input promises, in the same order as the input promises.
*/
