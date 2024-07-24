// URL of the public API
const apiUrl: string = "https://jsonplaceholder.typicode.com/posts";

// Use the fetch API to get data from the public API
fetch(apiUrl)
  .then((response: Response) => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then((data: any) => {
    // Log the response data to the console
    console.log("Fetched data:", data);
  })
  .catch((error: Error) => {
    // Handle any errors that occur during the fetch
    console.error("Error fetching data:", error.message);
  });
