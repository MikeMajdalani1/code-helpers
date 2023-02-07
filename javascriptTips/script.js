// 1 - remove duplicate from array
//array إزالة التكرارات بل
// let array = [1, 1, 1, 2, 2];

// array = [...new Set(array)];

// console.log(array);

//2 - transfer string to boolean
// احزر النتيجة
// let string = "Hello";
// console.log(!!string);
// let emptyString = "";
// console.log(!!emptyString);

//3 - console.time

// console.time("start");
// for (let i = 0; i < 20; i++) {
//   //do anything
// }
// console.timeEnd("start");

//4 - console.group
// console.group("URL details");
// console.log("Scheme");
// console.log("Scheme2");
// console.groupEnd();

//5 - copyright year
// const year = new Date().getFullYear();
// console.log(year);

//6 - check if object is empty
// const obj = {
//   name: "hello",
// };
// console.log(Object.keys(obj).length);

//7 - check type of data in JS
// let data1 = true;
// let data2 = "Hello";
// let data3 = 4;

// console.log(typeof data1);

//8- = vs == vs ===
// const x = 10;

// let a = 10;
// let b = 10;
// console.log(a == b);

// let c = 10;
// let d = "10";
// console.log(c === d);

//9 - template literals
const firstName = "Mike";
const sayHello = `Hello ${firstName}`;
console.log(sayHello);
