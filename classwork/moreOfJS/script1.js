// найти Минимальное
// const array = [1,2,3,5,6,8,9,-1,-5];

// let sumArr = array[0];
// for(let i = 1; i < array.length; i++){
//     if(array[i] < sumArr){
//         sumArr= array[i];
//     }
// }
// console.log(sumArr);


// найти Минимальное второе значение
// const array = [1,-2,3,5,6,8,9,-1,-5];

// let min = array[0];
// let min2 = min;
// for(let i = 1; i < array.length; i++){
//     if(array[i] < min){
//         min = array[i];
//     }else if(array[i] > min){
//         min2 = min;
//     }else if(){

//     }
// }
// console.log(min);
// console.log(min2);

// function find(arr1){
//     if(arr1.length < 2){
//         return undefined;
//     }
//     let min1 = Infinity;
//     let min2 = Infinity;

//     for(let i = 1; i < array.length; i++){
//         if(arr1[i]< min1){
//             min2 = min1;
//             min1 = arr1[i]; 
//           } else if(arr1[i] < min2) {
//             min2 = arr1[i];
//           }
//         }
//         return [min1, min2];
//     }
        


// fibanachi numbers
// function fib(n){
//     let a = 1;
//     let b = 1;

//     for (let i = 0; i < n; i++) {
//         let c = a +b;

//         a= b;
//         b = c;
//     }
//     return b;
// }
// console.log(fib(5));

function fib2(n){
   

    return n === 1 || n === 2 ? 1 : fib2(n - 2) + fib2(n - 1);
}
console.log(fib2(10));

