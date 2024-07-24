// URL of the public API
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Async function to fetch data from the public API and log the response
async function fetchData() {
  try {
    // Await the response from the fetch call
    const response = await fetch(apiUrl);

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Log the response data to the console
    console.log("Fetched data:", data);
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching data:", error.message);
  }
}

// Call the async function
fetchData();
