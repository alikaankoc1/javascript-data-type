//! String veri tipi
let text ="Ben Ali Kaan Koç. Bir mühendis adayıyım.";
console.log(text);
console.log(typeof text);

let text1= "5";
console.log(text1);
console.log(typeof text1);

//! Number veri tipi
let number = 25;
console.log(number);
console.log(typeof number);

//! Boolean veri tipi: true ve false değerlerinden oluşur.

let a = 5;
let b = 10;
let result = a+b;
console.log(result > 20);

//! NULL veri tipi: değer olmayan veri tipidir.

let c = null;
console.log(c);

//! Undifined veri tipi: henüz tanımlanmamış veri tipidir.

let d;
console.log(typeof d);

//! Object veri tipi

let person = {
    name:"Ali Kaan",
    age: 24,
    number: 1
}
console.log(person);
console.log(typeof person);

let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);

let selamVer = function(){
    console.log("Hello World!");
}
selamVer();