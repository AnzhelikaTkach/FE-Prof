


// Написать цикл, Который выводит Только четные числа
// let arrey = [1, 5, 8, 4, 7, 6, 2, 6, 4, 8];
// for(let i= 0; i < arrey.length; i++){
//     if(arrey[i] % 2 === 0)
//     console.log(arrey[i])
// }


// найти сумму положительных чисел
// let masiv = [1, 2, 5, -5, -4, 1, 2, 8];
// for(let i= 0; i < masiv.length; i++){
// if(masiv[i] > 0){
//     sum = sum + masiv[i]
// }
// }
// console.log(sum);




// найти сумму чисел, чей индекс равен значению элемента [0,1,3,5,4,6,5]
// let array = [0, 1, 3, 5, 4, 6, 5];    
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === i) {
//     sum += array[i];
//   }
// }
// console.log(sum);




// найти Минимальное и Максимальное числа в массиве  
// let arr = [1, 2, 3, 5, 8, 9, 52, -9, -6, 10];
// let min = -Infinity;
// let max = Infinity;
// for (let i=0; i< arr.length; i++){
//     const arrElement = arr[i];
//     if (arrElement > max){
//         max = arrElement;
//     }
// }



// Нужно найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
// [1, 2, 3, 5, 10, 46, 11, 20]
// const arr = [1, 2, 3, 5, 10, 46, 11, 20];
// let sumOfEven = 0;
// let sumofOdd = 0;
// for (let i=0; i< arr.length; i++){
//     if( arr[i] % 2 === 0){
//         sumOfEven += arr[i];
//     }
//     if(arr[i] % 2 !== 0){
//         sumofOdd += arr[i];
//     }
// }
// if(sumOfEven > sumofOdd){
//     console.log(sumOfEven - sumofOdd);
// }else{
//     console.log(sumofOdd - sumOfEven );
// }



// Перевернул массив чисел
// const num = [1, 2, 3, 4, 5];
// for(let i = num.length - 1; i >= 0; i--){
//     console.log(num[i]);
// }
// console.log(num[i]);
// or 
// const num = [1,2,3,4,5];
// const newNum = [];
// for(let i = num.length - 1; i >= 0; i--){
//     newNum.push(num[i]);
// }
// console.log(newNum);



// Выведите имя и возраст каждого человека в массиве объектов в виде строки.
// const profile = [{ name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
// ]
// for(let i = 0; i < profile.length; i++){
//     let element = profile[i];
//     console.log("${element.name} ${element.age}")
// }



// Создайте массив объектов, содержащий квадраты чисел от 1 до 10.Пример первого объекта {number: 1, square: 1}
// const arr = [];

// for(let i = 1; i <= 10; i++){
// arr.push({number:i, square:i ** 2})
// }
// console.log(arr);



// Найти общую сумму цен всех товаров из следующего массива.
// const array = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Mouse', price: 20 },
//   { name: 'Keyboard', price: 50 },
//   { name: 'Monitor', price: 300 },
// ];
// let result = 0;
// for(let i = 0; i < array.length; i++){
//     result += array[i].price
// }
// console.log(result)


// На основе массива продуктов создайте новый массив, где будут только продукты дороже 100.
// const food = [
//     { name: 'Laptop', price: 1200 },
//     { name: 'Mouse', price: 20 },
//     { name: 'Keyboard', price: 50 },
//     { name: 'Monitor', price: 300 },
//   ];
//   const newFood =[];
//   for(let i = 0; i < food.length; i++){
//     if(food[i].price > 100){
//         newFood.push(food[i]);
//     }
//   }
//   console.log(newFood);


// Создать функцию power, которая принимает 2 числа как аргумент. Первое число – основание, второе число – степень.Функцию возвращает результат арифметического действия. Пример вызова функции: 
// power(2,3) => 8
// Не использовать **.
function power(num1, num2) {
    let total = 1;
   for(let i = 0; i < num2; i++){
    total *= num1;
   }
   return total;
}
console.log(power(2,6));