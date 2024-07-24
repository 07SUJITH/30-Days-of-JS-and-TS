// Function to simulate fetching data with a delay and returning a promise
function fetchData(message: string, delay: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Chain the promises to log messages in a specific order
fetchData("Fetching user data...", 1000)
  .then((message: string) => {
    console.log(message); // Log message after 1 second
    return fetchData("User data fetched.", 1000);
  })
  .then((message: string) => {
    console.log(message); // Log message after an additional 1 second
    return fetchData("Fetching posts data...", 1000);
  })
  .then((message: string) => {
    console.log(message); // Log message after an additional 1 second
    return fetchData("Posts data fetched.", 1000);
  })
  .then((message: string) => {
    console.log(message); // Log message after an additional 1 second
    return fetchData("Fetching comments data...", 1000);
  })
  .then((message: string) => {
    console.log(message); // Log message after an additional 1 second
    return fetchData("Comments data fetched.", 1000);
  })
  .then((message: string) => {
    console.log(message); // Log message after an additional 1 second
    console.log("All data fetched successfully.");
  })
  .catch((error: Error) => {
    // Handle any errors that occur during the promise chain
    console.error("Error fetching data:", error.message);
  });
