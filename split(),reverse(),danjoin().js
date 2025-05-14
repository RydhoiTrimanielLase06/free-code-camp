
let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]

let charArra = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArra); // ["o", "l", "l", "e", "h"]

let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"

let stra = "coding";
let reversed = stra.split("").reverse().join("");
console.log(reversed);

let word = "hello";
let chars = word.split("");
chars.reverse();
console.log(chars.join("-"));