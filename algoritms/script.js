// Binary search
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);
//         if(array[mid] === target){
//             return "Target = " + target + "." + " Index = " + mid;
//         }else if(array[mid] < target){
//             left = mid + 1;
//         }else{
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch(numbers, 8));
// --------------------------------

// Binary search recurcive
// arrayBunary = [1,2,3,4,5,6,7,8,9,10];
// let left1 = 0;
// let right1 = arrayBunary.length-1;

// function binarySearchRec(array, target, left, right){
//     if(left > right){
//         return -1;
//     }
//     let mid = Math.floor((left+right)/2);
//     if(array[mid]===target){
//         return console.log("Target = " + target + "." + " Index = " + mid);
//     }
//     else if (array[mid]<target){
//         binarySearchRec(array,target, mid+1, right);
//     }
//     else{
//         binarySearchRec(array,target, left, mid-1);
//     }

// }
// binarySearchRec(arrayBunary, 1, left1, right1);

// --------------------------------
// Fibonacci function
//0 1 1 2 3 5 8 13 21 34 55 89
// let arrayFibonachi = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// function fibRec(fibIndex){
// let f1 = 0;
// let f2 = 1;
// let result = 0;
// for(let i = 2; i <= fibIndex; i++){
//     result = f1 + f2;
//     f1 = f2;
//     f2 = result;
//     result = 0;

// }
// console.log(f2);
// }
// fibRec(9);

// Fibonacci function recurcive
// function fibRec(fibIndex) {
//   if (fibIndex === 1 || fibIndex === 2){
//     // console.log(1);
//     return 1;
//   }else{
    // console.log(fibRec(fibIndex - 1) + fibRec(fibIndex -2));
//     return fibRec(fibIndex - 1) + fibRec(fibIndex -2);
//   }}
// fibRec(6);







//-----------------------------------------
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
// function eachCons(array,n) {
//     const result = [];
//     for(let i = 0; i <= array.length - n; i++){
//         const chunck = [];
//         for(let j = i; j < i + n; j++){
//             chunck.push(array[j]);
//         }
//         result.push(chunck);
//     }
//     return result;
// }


//-----------------------------------------
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]
// function between(a, b) {
//     const result = [];
//     for(let i = a; i <= b; i++) {
//         result.push(i);
//     }
//     return result;
// }


// Test.assertSimilar(toFreud(""), "");  USE THIS !string ? "" : 
// Test.assertSimilar(toFreud("test"), "sex");
// Test.assertSimilar(toFreud("This is a test"), "sex sex sex sex");
// Test.assertSimilar(toFreud("This is a longer test"), "sex sex sex sex sex");
// Test.assertSimilar(toFreud("You're becoming a true freudian expert"), "sex sex sex sex sex sex");

// function toFreud(string) {
//     return !string ? "" : string.split("").map(el => "sex").join(" ")
// }

// Test.assertSimilar(toFreud("test"), "sex");
// Test.assertSimilar(toFreud("This is a test"), "sex sex sex sex");
// Test.assertSimilar(toFreud("This is a longer test"), "sex sex sex sex sex");
// Test.assertSimilar(toFreud("You're becoming a true freudian expert"), "sex sex sex sex sex sex");

// function toFreud(string) {
//     return string.split("").map(el => "sex").join(" ");
// }

// // Стрелочная функция.

// const toFreud = s => !s ? "" : s.split("").map(el => "sex").join(" ");

//////////////////////////////////////////////////////////////
// merge sort

// const array = [13, 9 ,24, 8, 1, 3, 2, 6, 10];
// function mergeSort(array) {
//     if(array.length === 1) {
//         return array;
//     }

//     let middle = Math.floor(array.length / 2);
//     let left = array.slice(0,middle);
//     let right = array.slice(middle);

//     return mergeSort(mergeSort(left), mergeSort(right))
// }


// function merge (left, right){
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while(leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         }else{
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
// }


//////////////////////////////////////////////////////////////

// function mergeSort(array) {
//     let tmp;
//     let currentSrc = array;
//     let currentDest = new Array(array.length);
    
//     let size = 1;
//     while(size < array.length) {
//       for(let i = 0; i < array.length; i +=2* size) {
//         merge(currentSrc, i, currentSrc, i + size, currentDest, i, size);
//       }
      
//       tmp = currentSrc;
//       currentSrc = currentDest;
//       currentDest = tmp;
      
//       size = size * 2;
//     }
//     return currentSrc;
//   } 
  
//   function merge(src1, src1Start, src2, src2Start, dest, destStart, size) {
//     let index1 = src1Start;
//     let index2 = src2Start;
    
//     let src1End = Math.min(src1Start + size, src1.length)
//     let src2End = Math.min(src2Start + size, src2.length)
    
//     if((src1Start + size) > src1.length) {
//       for(let i = src1Start; i < src1End; i++) {
//         dest[i] = src1[i];
//       }
//       return;
//     }
    
//     let iterationCount = src1End - src1Start + src2End - src2Start;
    
//     for(let i = destStart; i < destStart + iterationCount; i++) {
//       if(index1 < src1End && (index2 >= src2End || src1[index1] < src2[index2])) {
//         dest[i] = src1[index1];
//         index1++
//       } else {
//         dest[i] = src2[index2];
//         index2++
//       }
//     }
//   }
// console.log(mergeSort([13, 9 ,24, 8, 1, 3, 2, 6, 10]));  

//////////////////////////////////////////////////////////////
// quick Sort

// function quickSort1(array, low, hight) {
//     if(array.length === 0) {
//       return;
//     }
    
//     if(low >= hight) {
//       return;
//     }
    
//     let middle = low + Math.floor((hight - low) / 2);
//     let pivot = array[middle];
    
//     let i = low;
//     let j = hight;
    
//     while(i <= j) {
//       while(array[i] < pivot) {
//         i++;
//       }
      
//       while(array[j] > pivot) {
//         j--;
//       }
      
//       if(i <= j) {
//        let temp = array[i];
//        array[i] = array[j];
//        array[j] = temp;
//        i++;
//        j--; 
//       }
//     }
    
//     if(low < j) {
//       quickSort1(array, low, j);
//     }
    
//     if(hight > i) {
//       quickSort1(array, i, hight);
//     }
//   }
// const array = [13, 9 ,24, 8, 1, 3, 2, 6, 10];
//   console.log(quickSort1(array,0, array.length - 1)); 



//////////////////////////////////////////////////////////////


// function quick(array, begin, end) {
//     if(begin <= end) {
//       return;
//     }

//     let pivot = partition(array, begin, end);
//     quick(array, begin, pivot - 1);
//     quick(array, pivot - 1, end);
// }

//   function partition(array, begin, end) {
//   let counter = begin;
//   for(let i = begin; i < end; i++) {
//     if(array[i] < array[end]) {
//         let tmp = array[counter];
//         array[counter] = array[i];
//         array[i] = tmp;
//         counter++;
//       }
//     }
//       let tmp = array[end];
//   array[end] = array[counter];
//   array[counter] = tmp;
  
//   return counter;
// }
// const array = [13, 9 ,24, 8, 1, 3, 2, 6, 10];
// console.log(quick(array, 0, array.length - 1));


//////////////////////////////////////////////////////////////
// class Node {
//     constructor() {
//       this.left = null;
//       this.right = null;
//       this.value = null;
//     }
//   }
  
//   function isNodeExist(node) {
//     return node !== null && node.value !== null;
//   }
  
//   function createNode(node, value) {
//     node.left = new Node();
//     node.right = new Node();
//     node.value = value;
//   }
  
//   function getMax(node) {
//     if(!isNodeExist(node)) {
//       return null;
//     }
    
//     if(!isNodeExist(node.right)) {
//       return node;
//     }
//     return getMax(node.right);
//   }
//   //    /LR
//   function directOrder(node) {
//     if(!isNodeExist(node)) {
//       return;
//     }
    
//     console.log(node.value);
//     directOrder(node.left);
//     directOrder(node.right);
//   }


//   function insert(node, value) {
//     if(!isNodeExist(node)) {
//      createNode(node, value);
//    } else if(value , node.value) {
//      insert(node.left, value);
//    } else {
//      insert(node.right, value);
//    }
//  }
 
//  const digit = [2,5,16,4,1,3,7,6,11,10,14]
//  const node = new Node();
//  createNode(node, 9);
//  for(let i = 0; i < digit.length; i++) {
//    insert(node, digit[i]);
//  }
//  directOrder(node);

////////////////////////////////////////////////////

//  function isPrime(number) {
//   if(number < 2) {
//     return false;
//   }
//   //121 ---> 11
//   for(let i = 2; i * i <= number; i++) {
//     //
//     if(number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }


// function isPrimeOpt(number) {
//   if(number < 2) {
//     return false;
//   }
  
//   if(number % 2 === 0) {
//     return number === 2;
//   }
  
//   if(number % 3 === 0) {
//     return number === 3;
//   }
  
//   for(let i = 5; i * i  <= number; i += 6) {
//     if(number % i === 0 || number % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// }
//1000 -- 3 5 7 11 13 .....
  //0(i) -- max
  //isPrime(i)
  //arr[]
// function eratosfen(max) {

//   let isPrime = new Array(max).fill(true);
//   let primes = [];
//   											//5 //6
//   for(let i = 2; i * i < max; i++){
//     if(isPrime[i]) {
//       for(let j = 2 * i; j < max; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }
  
//   for(let i = 2; i < max; i++) {
//     if(isPrime[i]) {
//       primes.push(i);
//     }
//   }
//   return primes;
// }

// console.log(eratosfen(100));


/////////////////////////////////////////////////

// function getIntRadix(number, radix) {
//   const digits = getDigitTable();

//   if(radix < 2 || radix >= digits.length || number <= 0) {
//     throw new Error("invalid arguments")
//   }

//   let valueStr = "";

//   while(number > 0) {
//     valueStr = digits[number % radix] + valueStr;
//     number = Math.floor(number / radix);
//   }
//   return valueStr
// }

// function getDigitTable() {
//   const digits = [];

//   for (let i = '0'.charCodeAt(0); i <= '9'.charCodeAt(0); i++) {
//     digits.push(String.fromCharCode(i)); //10
//   }
//   for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
//     digits.push(String.fromCharCode(i)); //26
//   }
//   return digits;
// }

// console.log(getIntRadix(17777, 21));


/////////////////////////////////////////

// let array = [
//   [1,4,7,11,15,16],
//   [2,5,8,12,19,22],
//   [10,13,14,17,24,27],
//   [18,21,23,26,30,36]
// ];

// function searchMatrix(matrix, k) {
//   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
//     return false;
//   }

//   const m = matrix.length;
//   const n = matrix[0].length;

//   let i = 0;
//   let j = n - 1;

//   while (i < m && j >= 0) {
//     if (matrix[i][j] === k) {
//       return true;
//     }
//     if (matrix[i][j] > k) {
//       j--;
//     } else {
//       i++;
//     }
//   }

//   return false;
// }

// console.log(searchMatrix(array,4));


/////////////////////////////////////
// Backpack

// function findOptimalBP() {
  //2-5 предмет или 1-4 по индексам
  // const weights = [3,4,5,8,9];
  // const prices = [1,6,4,7,6];
  // const maxWeight = 13;

  // let maxPrice = 0;
  // let optimalItems = [];

  // function findCombination(currentIndex, currentWeight, currentPrice, selectedItems) {
  //     if(currentIndex === weights.length) {
  //         if(currentWeight <= maxWeight && currentPrice > maxPrice) {
  //             maxPrice = currentPrice;
  //             optimalItems = selectedItems.slice();
  //         }
  //         return;
  //     }
      
  //     if(currentWeight + weights[currentIndex] <= maxWeight) {
  //         selectedItems.push(currentIndex);
  //         findCombination(currentIndex+1, currentWeight+weights[currentIndex], currentPrice + prices[currentIndex], selectedItems);
          //удаляем последний выбранный предмет для исследования других комбинаций
      // }
      
      //Пропустить текущий предмет в комбинации
      // }
  // }
  
  //Запустить рекурсивно функцию для поиска оптимальной комбинации
          
  //Вывести на экран оптимальное содержимое рюкзака        

/////////////////////////////////////

// Robot

function way(n,m){
  if(n< 1 || m< 1){
    return 0;
  }

  if(n ===1 && m === 1){
    return 1;
  }

  return way(n - 1, m) + way(n, m - 1);
}