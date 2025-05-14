
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]

//pop()Metode ini menghapus elemen terakhir
//unshift()menambahkan satu atau beberapa elemen ke awal array dan mengembalikan panjang barunya
//shift()metode ini menghapus elemen pertama dari array
//push()digunakan untuk menambahkan satu atau beberapa elemen ke akhir array.

let arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
console.log(arr);

let ar = ["a", "b", "c", "d"];
let first = ar.shift();
let last = ar.pop();
console.log(first, last, ar);

let a= ["a", "b", "c"];
a.unshift("x", "y");
a.pop();
console.log(a);