// function sum (a,b) {
//     console.log(a + b);
// }

// function callNumbers(callback) {
//     const num1 = 1;
//     const num2 = 2;
//     callback(num1, num2);
// }

// callNumbers(sum);

// -------------------

// setTimeout(callback, time(2000))

// setTimeout(() => {
//     console.log("Hello world!");
// }, 5000);

// --------------------------

// setInterval
// setInterval(() => {
//     console.log("Hello world!");
// }, 3000);
// ------------------------------

// const btn = document.querySelector("#open");
// const message = document.querySelector("#message");

// btn.onclick = function () {
//     setTimeout(() => {
//     message.style.display = "block";
// }, 2000);
// };

// ------------------------------

// // forEach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 2];

// numbers.forEach((element, index, array) => {
//     console.log(element);
// });

// const names = ["Dima", "Roza", "Mira", "Ivan"];
// names.forEach((element,index,array)=>{
// console.log(`${element} ${index+1}`);
// });

// ------------------------------

// const names = ["Dima", "Roza", "Mira", "Ivan", "Anzhelika", "Vlad", "Max"];

// names.forEach((element, index, array) => {
//     if(index % 2 === 0){
//         console.log(element);
//     }
// })

// ------------------------------

// const numbers = [1,2,3,1,1,2,5,6,1,4,5,1,1,5,3,1];
// let sum = 0;

// numbers.forEach((element) => {
//     if(element == 1){
//         sum++;
//     }
// });
// console.log(sum);

// ------------------------------

// map
// [1,2,3] => [ 2,3,4]

// const numbers = [1, 2, 3, 4];
// const squares = numbers.map((element, index, array) => {
//     return element ** 2;
// });
// console.log(numbers, squares);

// ------------------------------

// const numbers = [1,2,-5,5,-6,-8,1,6,7,-1];
// let plus = numbers.map((element) => {
//    if(element < 0){
//     return element * (-1);
//    } else {
//     return element
//    }
// });
// console.log(plus);

// ------------------------------

// const numbers = [1,2,-5,5,-6,-8,1,6,7,-1];
// let plus = numbers.map((element ) => element < 0 ? element*(-1) : element
// );
// console.log(plus);

// ------------------------------
// const string = ["hello", "my", "friend"];

// let fixed = string.map((element, index, array) => {
//     let newString = "";
//     for(let i = element.length - 1;i >= 0; i--){
//        newString += element[i];
//     }
//     return newString;
// });
// console.log(fixed);
// ------------------------------
// const string = ["hello", "my", "friend"];
// const fixed = string.map(word => word.split("").reverse().join(""));

// console.log(fixed);
// ------------------------------

// filter

// const nums = [1,2,-6,-3,2,7,8];

// const positiveNums = nums.filter((element) => element > 0 );

// console.log(positiveNums);
// console.log(nums);

// const nums = [1, 2, 6, 3, 2, 7, 8];
// const even = nums.filter((element) => element % 2 === 0);
// console.log(even);

// const fructs = ['apple', 'banana', 'cherry', 'kiwi'];
// const fiveSimbols = fructs.filter((element) => element.length >= 5);
// console.log(fiveSimbols);

// const number = [10,20,3,50,17,16,12,13,70];
// const bigNum = number.filter((element) => element >= 10 && element <= 30);
// console.log(bigNum);

// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Shirt", category: "Clothing" },
//   { name: "Smartphone", category: "Electronics" },
//   { name: "Dior", category: "bag" },
//   { name: "Kafka", category: "book" },
// ];

// const newProducts = products.filter(
//   (element) => element.category === "Electronics"
// );
// console.log(newProducts);

// const objects = [
//     { name: 'Alice', age: 30, isActive: true },
//     { name: 'Bob', age: 25, isActive: false },
//     { name: 'Charlie', age: 35, isActive: true },
//     { name: 'David', age: 28, isActive: false }
// ];

// const over30IsActive = objects.filter((element) => element.age >= 30 && element.isActive);
// console.log(over30IsActive);


// find

const nums = [1,2,3,4,5];
const evenElem = nums.find((element)=> element % 2 === 0);
console.log(evenElem);

// findLast

const evenElemLast = nums.findLast((element)=> element % 2 === 0);
console.log(evenElemLast);

