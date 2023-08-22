// sort
// const nums = [0, 1, 5, 10, 15, 3, 2, 4];
// nums.sort((a,b) => a - b);

// nums.sort((a,b) => b - a);
// console.log(nums);

// for letters
// const letters = ["a", "b", "a", "c", "v"];
// letters.sort();
// letters.reverse();
// console.log(letters);

// const letters1 = ["av", "ba", "aa", "ca", "ab"];
// letters.sort();
// letters.reverse();
// console.log(letters);

// const items = [
// 	{id: 1, title: "велосипед", price: 45000},
// 	{id: 2, title: "самокат", price: 15000},
// 	{id: 3, title: "сноуборд", price: 20000},
// 	{id: 4, title: "лыжи", price: 22000}
// ]

// items.sort((a, b) => a.price - b.price);
// console.log(items);

// Напишите функцию sortStrings, которая принимает в качестве аргумента массив строк и возвращает новый массив со строками, отсортированными в алфавитном порядке.

// const string = ["hello", "hi", "good evening", "good night"];
// const sortStrings = string.sort();
// console.log(sortStrings);

// const sortStrings = function (array) {
//     const result = [];
//     result.push(array.sort());
//     return result
// }

/////////////////////////////////

// function sumSmallNums(nums) {
//     nums.sort((a, b) => a - b);
//     return nums[0] + nums[1];
// }

// console.log(sumSmallNums([5, 6, 8, 7, 1, 3]));

// const nums = [-1,3,5,7,-4,1,6,-1];

// function sumPositiveNums(nums) {
//     nums.sort((a, b) => a - b);
//     nums = nums.filter((element) => element > 0 );
//     return nums[0] + nums[1];
// }
// console.log(sumPositiveNums([-1,3,5,7,-4,1,6,-1]))

/////////////////////////////////

// Math.random - 0-1 => 0.3, 0.4, 0.5
// const array = [25, 16, 7, "Joe", "John"];
// array.sort(() => {
//     return 0.5 - Math.random();
// });
// console.log(array);

/////////////////////////////////////

// reduce

// const array = [1,2,3,4];
// const sum = array.reduce((acc, current) => acc + current);
// console.log(sum);

// const strings = ["h", "e", "l", "l", "o"];
// const newString = strings.reduce((acc, current)=> acc + current);
// console.log(newString);

// const array = [1,2,3,4];
// const sum = array.reduce((acc, current) => acc + current, 0);
// console.log(sum);

// summ of positive numbers
// const nums = [ 1, -2, 5, -3, -5, -4, 2];
// const result = nums.reduce((acc, current) =>{
//     if(current > 0) {
//         return acc + current;
//     }else {
//         return acc;
//     }
// }, 0);
// console.log(result);

// const nums = [1,2,3,6,5,8,16,12,31];
// const result = nums.reduce((acc, current) => current % 2 === 0 ? acc + current : acc, 0);
// console.log(result);

//////////////////////////////////////

// const nums = [1,2,3,6,5,8,16,12,31];
// const maxNummbers = nums.reduce((acc, current) => {
//     if( current > acc) {
//         return current
//     }else {
//         return acc
//     }
// }, 0)
// console.log(maxNummbers);

///////////////////////////////////////////

const arr = [
  { id: 1, price: 130 },
  { id: 2, price: 230 },
  { id: 3, price: 100 },
  { id: 4, price: 300 },
];

// const maxPrice = arr.reduce((acc, current) => {
//     if(current.price > acc.price){
//         return current;
//     }else {
//         return acc;
//     }
// });
// console.log(maxPrice);

// const maxPrice = arr.reduce((acc, current) => current.price > acc.price ? current : acc);
// console.log(maxPrice);

//////////////////////////////////////////////////////////////

// const products = [
//   { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//   { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//   { id: 3, title: "сноуборд", price: 20000, marks: [4, 4, 5, 4] },
//   { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
// ];

// products.forEach((elem) => {
//   elem.sum_marks = elem.marks.reduce((acc, curr) => acc + curr);
//   delete elem.marks;
// });
// console.log(products);

//////////////////////////////////////////////////////////////

// const products = [
//     { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//     { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//     { id: 3, title: "сноуборд", price: 20000, marks: [4, 4, 5, 4] },
//     { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
//   ];

//   products.forEach((el) => {
//     el.maxMark = el.marks.reduce((acc, curr) => acc > curr ? acc : curr);
//     delete el.marks
//   });
//   console.log(products);

//////////////////////////////////////////////////////////////

const products = [
    { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
    { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: "сноуборд", price: 20000, marks: [4, 4, 5, 4] },
    { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
  ];

products.forEach((element) => {
    element.avgMark = element.marks.reduce((acc, current) => acc + current) / element.marks.lenght;
    delete element.marks;
    });
    console.log(products);