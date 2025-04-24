console.log("Hello, World!");
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };

  console.log(book);

  // Creating two symbols
const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');
console.log(symbol1 === symbol2); // Outputs: false

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
// Outputs: 1234567890123456789012345678901234567890n

//string
let developer = "Jessica";
developer = "Quincy";
console.log(developer);


//mengabungkan dua string dengan +
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; // John Doe
console.log(fullName);


//mengabungkan dua string dengan +=
let greeting = 'Hello';
greeting += ', John!';
console.log(greeting);

// greeting is now the string Hello, John!

//mengabungkan dua string dengan contac
let str1 = 'Hello';
let str2 = 'World';
let result = str1.concat(' ', str2);
console.log(result);// Hello World

let name = "Alice";
console.log("Hello, " + name + "!"); // Outputs: Hello, Alice!