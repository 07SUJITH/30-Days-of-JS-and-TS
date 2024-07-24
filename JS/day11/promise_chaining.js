//  Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// Function to simulate fetching data with a delay and returning a promise
function fetchData(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Chain the promises to log messages in a specific order
fetchData("Fetching user data...", 1000)
  .then((message) => {
    console.log(message); // Log message after 1 second
    return fetchData("User data fetched.", 1000);
  })
  .then((message) => {
    console.log(message); // Log message after an additional 1 second
    return fetchData("Fetching posts data...", 1000);
  })
  .then((message) => {
    console.log(message); // Log message after an additional 1 second
    return fetchData("Posts data fetched.", 1000);
  })
  .then((message) => {
    console.log(message); // Log message after an additional 1 second
    return fetchData("Fetching comments data...", 1000);
  })
  .then((message) => {
    console.log(message); // Log message after an additional 1 second
    return fetchData("Comments data fetched.", 1000);
  })
  .then((message) => {
    console.log(message); // Log message after an additional 1 second
    console.log("All data fetched successfully.");
  })
  .catch((error) => {
    console.error("Error fetching data:", error.message);
  });

/*
  Chaining Promises:

We start the promise chain by calling fetchData("Fetching user data...", 1000), which simulates fetching user data with a 1-second delay.
The .then() method is used to handle the resolved promise and log the message.
Each .then() method returns a new promise created by calling fetchData with a different message and delay.
This creates a sequence where each step waits for the previous promise to resolve before proceeding.
  */
