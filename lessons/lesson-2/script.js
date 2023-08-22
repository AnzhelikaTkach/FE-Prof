// let age = prompt("How old are you?");
// console.log(age * 365)


// let num = prompt("NUM");
// console.log(num **2)

// let number = prompt("Enter number: ")
// if (+number === 0) {
//    console.log("this number is zero"); 
// } else if(number % 2 !== 0) {
//     console.log("uneven number");
// } else {
//     console.log("even number")
// }

// push - return new array's length. В конец массива добавляет новый элемент.

// const num = [1, 2, 3];
// num.push(4);
// // return: [1, 2, 3, 4]; В выводе будет цифра (четыре)
// console.log(num.push(8));

// pop - С конца массива забирает последний элемент. В консоли выводит удалённый элемент.

// unshift - return new array's length. С началa массива добавляет новый элемент.
// shift - С началa массива забирает первый элемент. В консоли выводит удалённый элемент.



// const array = [];

// const num1 = prompt("Number 1:")
// array.push(+num1);

// const num2 = prompt("Number 2:")
// array.push(+num2);

// const num3 = prompt("Number 3:")
// array.push(+num3);
// or
// array.push(+num1, +num2, +num3);

// Создайте новый массив в котором каждый элемент оригинального массива возводится в квадрат.
// const original = [2, 3, 4, 5, 6];
// const newArray = [];

// newArray.push(original[0] ** 2);
// newArray.push(original[1] ** 2);
// newArray.push(original[2] ** 2);
// newArray.push(original[3] ** 2);
// newArray.push(original[4] ** 2);

// console.log(original);
// console.log(newArray);



// const array = [1, 5, -8, 2, -6, 1];

// for( let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//         console.log(array[i]);
//     }
// }

// const array = [1, 7, 5, 4, 3, 2];

// for( let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0 && array[i] !== 0){
//         console.log(array[i]);
//     }
// }



// const array = [15, 8, 4, 2, 4, 7, 12, 35, 45, 58];

// for( let i = 0; i < array.length; i++){
//     if(i % 3 === 0){
//         console.log(array[i]);
// }
// }

// Агрегация – любые вычисления в массиве.
// Найдите сумму всех элементов массива.
// const array = [1, 2, 3, 4];
// let sum = 0;

// for( let i = 0; i < array.length; i++){
//     sum += array[i];
// }
// console.log(sum);



// Найти сумму всех положительных элементов массива.
// const array = [5, 6, -2, 1, -7, 5];
// let result = 0;

// for( let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//         result += array[i];
//     }
// }
// console.log(result);


// Найти сумму элементов массива, если значение индекса и элемента совпадают.
// const array = [0, 5, 2, 2, 3, 5, 6];
// let result = 0;

// for( let i = 0; i < array.length; i++){
//     if(i === array[i]){
//         result += array[i];
//     }
// }
// console.log(result);





// Найти сумму четных чисел и нечетных. Какой из них больше
// const array = [1, 5, 4, 7, 2, 3, 4, 5, 6, 7, 4, 5, 6];
// let sum1 = 0;
// let sum2 = 0;

// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//          sum1 += array[i];
//     } else {
//         sum2 += array[i];
//     }

// }
// console.log("sum1 =====> ", sum1);
// console.log("sum2 =====> ", sum2);

// if(sum1 > sum2){
//     console.log(sum1 - sum2);
// } else if(sum2 > sum1){
//     console.log(sum2 - sum1);
// } else {
//     console.log(0);
// }


