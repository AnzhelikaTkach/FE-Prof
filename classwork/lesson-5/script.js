// function declaration
// function expression
// arrow function

// function declaration
// hi();
// function hi(){
//     console.log("Hello!");
// };
// hi();

// // function expression

// const hello = function (){
//     console.log("Hello!");
// };
// hello();

// // hositing(function declaration, var) heve no neme

// // arrow function

// const hel = () => {
//     console.log("Hello!");
// };

// const helLo = () => console.log('hello')
// const helReturn = () => "Hello";

// callback function
// const function1 = function () {
//     console.log("This is function1");
// };
//   const function2 = function (callback) {
//     console.log("This is function2");
//     return callback();
// };

// function2(function1);

// exersise1
// const new1 = function (array, function1) {
//   return function1(array);
// };

// function summNumber(array1) {
//   let counter = 0;
//   for (let i = 0; i < array1.length; i++) {
//     counter += array1[i];
//   }
//   return counter;
// }

// function evenNumber(array1) {
//     let arrayNew = [];
//     for(let i = 0; i < array1.length; i++) {
//         if(array1[i] % 2 === 0){
//             arrayNew.push(array1[i]);
//         }
//     }
//     return arrayNew;
// }

// console.log(new1([1, 2, 3, 4, 12, 23, 45], summNumber));
// console.log(new1([1,2, 3, 4], evenNumber));

// 1 - event,
// addEventListener("click", callBack function);
// onclick

// const btn = document.querySelector("button");
// function clickButton() {
//     alert("Hello")
// }
// btn.onclick = () => {
//     alert("Hello!!!!");
// }

// btn.addEventListener("click", () => {
//     alert("Hello!!");
// });
// setTime 1 time
// setInterval every set time

// BigInt.addEventLi

// const minusButton = document.createElement("button");
// minusButton.innerText = "-";

// const plusButton = document.createElement("button");
// plusButton.innerText = "+";

// document.body.append(minusButton, plusButton);

// minusButton.onclick = () => {
//     console.log("Minus");
// }
// plusButton.onclick = ( ) => {
//     console.log("Plus");
// }

// let number = 0;

// const minusButton = document.createElement("button");
// minusButton.innerText = "-";

// const plusButton = document.createElement("button");
// plusButton.innerText = "+";

// document.body.append(minusButton, plusButton);


// minusButton.onclick = () => {
//    number--;
//     console.log(number);
// }
// plusButton.onclick = ( ) => {
//     number++;
//     console.log(number);
// }

// let number = 0;



// const minusButton = document.createElement("button");
// minusButton.innerText = "-";

// const plusButton = document.createElement("button");
// plusButton.innerText = "+";

// document.body.append(minusButton, plusButton);

// const text1 = document.createElement("p");
// text1.innerText = "0";

// document.body.appendChild(text1);

// minusButton.onclick = () => {
// //    number--;
// //     text1.innerText = number;

//     text1.innerText --
// }
// plusButton.onclick = ( ) => {
//     // number++;
//     // text1.innerText = number;
//     text1.innerText ++
// }

// let number = 0;

// object event
// exersice ++

// const text =  document.createElement('p');
// document.body.append(text);
// let pContent = text.textContent;
// addEventListener("keydown", (e) => {
// // console.log(e.key);
//     pContent += e.key;
//     text.innerText = pContent;
// });

// exersice
// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на парагараф текст должен меняться на звездочки.
// const array = [
//     "This is some text",
//     "You can use event listener",
//     "Future frontend developer",
//     "Never give up",
//   ];

// for (let i = 0; i < array.length; i++) { 
//   const createP = document.createElement("p");
//   createP.innerText = array[i];
//   document.body.append(createP);
//   createP.onclick = () => {
//     let textLength = "";
//     for(let j = 0; j < createP.innerText.length; j++){
//         textLength += "*";
//     }
//     createP.innerText = textLength;
//   }
// }

// Создайте программу, которая генерирует кнопки на основе массива строк и выводит их в интерфейс. При нажатии на кнопку текст должен меняться на "Clicked".
const arrayBut = ["Text1","Text2","Text3"];

for(let i = 0; i < arrayBut.length; i++){
    const button = document.createElement("button");
    button.innerText = arrayBut[i];
    document.body.append(button);
    button.onclick = () => {
        button.innerText = "Clicked";
    }
}