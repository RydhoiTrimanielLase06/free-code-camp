
//mencari indeks
let numbers = [10, 20, 30, 20, 40];
let index = numbers.indexOf(20);
console.log(index);


let colors = ["red", "green", "blue", "yellow", "green"];
let inde = colors.indexOf("green", 2);
console.log(inde);

let buah = ["mangga", "jeruk", "lemon", "pisang"];
console.log(buah.includes("jeruk"));//true
console.log(buah.includes("durian"))//false

//menambah nilai 4 kedalam array
let originalArray = [1, 2, 3];
let copyArray = [...originalArray];
copyArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copyArray);     // [1, 2, 3, 4]



//const colors = ["red", "blue", "green", "yellow"];
//colors.splice(1, 2, "purple");
// //Jawaban: ["red", "purple", "yellow"]   Menghapus 2 item dari indeks ke-1 (blue, green) dan menggantinya dengan "purple".



const arr = ["apple", "banana", "cherry", "date"];
const slicedArr = arr.slice(1, 3);
Jawaban: ["banana", "cherry"]
//slice(1, 3) mengambil elemen dari indeks 1 sampai sebelum 3.
