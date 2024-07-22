// Task 1: Change text content of a paragraph on button click
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("textParagraph").textContent =
      "The text has been changed!";
  });

// Task 2: Toggle image visibility on double-click
document
  .getElementById("toggleImage")
  .addEventListener("dblclick", function () {
    const image = document.getElementById("toggleImage");
    if (image.style.display === "none") {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });

// Activity 2: Mouse Events
// Task 3: Change background color on mouseover
document
  .getElementById("mouseoverElement")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightgreen";
  });

// Optional: Change background color back on mouseout
document
  .getElementById("mouseoverElement")
  .addEventListener("mouseout", function () {
    this.style.backgroundColor = "lightblue";
  });

// Activity 3: Keyboard Events
// Task 4: Log key pressed on keydown event in input field
const logKeyInput = document.getElementById("logKeyInput");

logKeyInput.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
});
// Task 5: Display current value of input field in paragraph on keyup
const displayValueInput = document.getElementById("displayValueInput");
const displayParagraph = document.getElementById("displayParagraph");

displayValueInput.addEventListener("keyup", function () {
  displayParagraph.textContent = `Current value: ${displayValueInput.value}`;
});

// Task 6: Prevent form submission and log form data to console
const dataForm = document.getElementById("dataForm");

dataForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(dataForm);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  console.log("Form data:", formObject);
});

// Task 7: Display selected value of dropdown in paragraph on change
const dropdown = document.getElementById("dropdown");
const selectedValueParagraph = document.getElementById(
  "selectedValueParagraph"
);

dropdown.addEventListener("change", function () {
  selectedValueParagraph.textContent = `Selected value: ${dropdown.value}`;
});

// Task 8: Log text content of clicked list item using event delegation
const itemList = document.getElementById("itemList");

itemList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
});
// Task 9: Listen for events from dynamically added child elements
const parentElement = document.getElementById("parentElement");
const addChildButton = document.getElementById("addChildButton");

// Function to add a new child element
function addChildElement() {
  const newChild = document.createElement("div");
  newChild.className = "child";
  newChild.textContent = `Child ${
    parentElement.getElementsByClassName("child").length + 1
  }`;
  parentElement.appendChild(newChild);
}

// Event listener for the add child button
addChildButton.addEventListener("click", addChildElement);

// Event listener on parent element to handle events from dynamically added children
parentElement.addEventListener("click", function (event) {
  if (event.target.classList.contains("child")) {
    console.log(`Clicked child: ${event.target.textContent}`);
  }
});
