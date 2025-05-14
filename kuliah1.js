//soal nomor1
let result = 0 / 0;
console.log(result); // Output: NaN

console.log(NaN === NaN); // Output: false

console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(isNaN("37"));      // false: "37" is converted to 37
console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
console.log(isNaN(""));        // false: empty string is converted to 0
console.log(isNaN(" "));       // false: string with a space is converted to 0

console.log(isNaN("blabla"));  // true: "blabla" is not a number

function divide(a, b) {
    let result = a / b;
    if (Number.isNaN(result)) {
      return "Error: Division resulted in NaN";
    }
    return result;
  }
  
  console.log(divide(10, 2));  // 5
  console.log(divide(10, 0));  // Infinity
  console.log(divide(0, 0));   // "Error: Division resulted in NaN"


  //soal nomor 2
  //tipe data string to angka
  console.log(parseFloat("3.14"));     // Output: 3.14
console.log(parseFloat("3.14 abc")); // Output: 3.14
console.log(parseFloat("3.14.5"));   // Output: 3.14
console.log(parseFloat("abc 3.14")); // Output: NaN

console.log(parseInt("42"));       // Output: 42
console.log(parseInt("42px"));     // Output: 42
console.log(parseInt("3.14"));     // Output: 3
console.log(parseInt("abc123"));   // Output: NaN

//soal nomor 3
//pembulTn terdekat
console.log((3.14159).toFixed(3));  // Output: "3.142"
console.log((3.14449).toFixed(3));  // Output: "3.144"
console.log((3.14550).toFixed(3));  // Output: "3.146"

let price = 19.99;
let taxRate = 0.08;
let total = price + (price * taxRate);
console.log("Total: $" + total.toFixed(2)); // Output: "Total: $21.59"