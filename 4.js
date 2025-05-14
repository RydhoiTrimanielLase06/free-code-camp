let letter = "A";
let symbol="!";
console.log(letter.charCodeAt(0));
console.log(symbol.charCodeAt(0));  // charCodeAt(0)) untuk mencari urutan ASCII 


let char = String.fromCharCode(65);
console.log(char);  // Output: A


let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true untuk mengetahui apakah ada substring dalam sebua kalimat

let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);  // Output: "HELLO, WORLD!"

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // Output: "i am learning javascript!"

let text = "I love JavaScript!";
let newText = text.replace("JavaScript", "coding");

console.log(newText);  // Output: "I love coding!"(replace)


