/*
Promise.race([promise1, promise2, promise3]) takes an array of promises and returns a single promise that resolves or rejects as soon as the first promise in the array resolves or rejects.*/
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

// Use Promise.race to get the first resolved promise
Promise.race([promise1, promise2, promise3])
  .then((value) => {
    // Log the value of the first resolved promise
    console.log("First promise resolved:", value);
  })
  .catch((error) => {
    // Handle any errors that occur
    console.error("Error:", error.message);
  });
