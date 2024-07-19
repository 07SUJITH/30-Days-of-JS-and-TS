// Day 7: Objects

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
interface Book {
    title: string;
    author: string;
    year: number;
    getDetails?: () => string;
    updateYear?: (year: number) => void;
    getDetailsWithYear?: () => string;
}

const book: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = () => {
    return `${book.title} by ${book.author}`;
};

console.log(book.getDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = (year: number) => {
    book.year = year;
    console.log(book);
};

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
interface Library {
    name: string;
    books: Book[];
}

const library: Library = {
    name: "My Library",
    books: [
        {
            title: "Book 1",
            author: "Author 1",
            year: 2021
        },
        {
            title: "Book 2",
            author: "Author 2",
            year: 2022
        },
        {
            title: "Book 3",
            author: "Author 3",
            year: 2023
        }
    ]
};

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach(book => {
    console.log(book.title);
});

// Activity 4: The this keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
function addGetDetailsWithYear(book: Book) {
    book.getDetailsWithYear = function() {
        return `${this.title} (${this.year})`;
    };
}

library.books.forEach(addGetDetailsWithYear);

library.books.forEach(book => console.log(book.getDetailsWithYear()));

console.log(library.books[0].getDetailsWithYear()); // Output: "Book 1 (2021)"
console.log(library.books[1].getDetailsWithYear()); // Output: "Book 2 (2022)"
console.log(library.books[2].getDetailsWithYear()); // Output: "Book 3 (2023)"

// Activity 5: Object Iteration

// Task 8: Use a for..in loop to iterate over the properties of the book object and log each property and its value.
for (const property in book) {
    console.log(`${property}: ${(book as any)[property]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
