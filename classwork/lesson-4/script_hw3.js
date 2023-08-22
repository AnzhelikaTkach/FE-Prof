// # Задачи:

// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.
// const goods = [
//   {
//     title: "BMW",
//     price: "40000",
//     count: "15",
//   },
//   {
//     title: "Toyota",
//     price: "20000",
//     count: "13",
//   },
//   {
//     title: "Ford",
//     price: "30000",
//     count: "20",
//   },
//   {
//     title: "Chevrolet",
//     price: "60000",
//     count: "9",
//   },
//   {
//     title: "Volkswagen",
//     price: "30000",
//     count: "13",
//   },
// ];
// let sumOfAllGoods = 0;
// let countOfallGoogs = 0;
// for(let i = 0; i <goods.length; i++){
//   const goodsTitle = goods[i].title;
//   const goodsPrice = goods[i].price;
//   const goodsCount = goods[i].count
//   let sum = goods[i].price * goods[i].count;

//   console.log(goodsTitle);
//   console.log(goodsPrice);
//   console.log(goodsCount);

//   console.log(sum)
//    sumOfAllGoods += sum;
//   countOfallGoogs += Number(goods[i].count);
//   // console.log(sumOfAllGoods)

// }
// console.log(sumOfAllGoods);
// console.log(countOfallGoogs);
// 2)Напишите скрипт, который выводит в интерфейс следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):

// ![table.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3900163f-8f90-42d8-a0b9-809b4c279eb7/table.png)

// 3)Дан массив из объектов, в котором хранятся породы собак и их возраст.Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.

// const dogBreeds = [
//   {
//     breed: "golden retriever",
//     age: 7,
//   },
//   {
//     breed: "labrador retriever",
//     age: 4,
//   },
//   {
//     breed: "french bulldog",
//     age: 12,
//   },
//   {
//     breed: "beagle",
//     age: 6,
//   },
//   {
//     breed: "german shepherd dog",
//     age: 2,
//   },
//   {
//     breed: "poodle",
//     age: 3,
//   },
//   {
//     breed: "bulldog",
//     age: 4,
//   },
// ];


// for(let i = 0; i < dogBreeds.length; i++){
//   const paragraf = document.createElement("p");
//   paragraf.innerText = `${dogBreeds[i].breed}'s age is ${dogBreeds[i].age}.`;
//   document.body.append(paragraf);

// }


// 4)Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.

const movies = [
  {
    movie: "Hotel Transylvania: Transformania",
    year: "January 14, 2022",
  },
  {
    movie: "The Ice Age Adventures of Buck Wild",
    year: "January 28, 2022" ,
  },
  {
    movie: "The Beatles: Get Back",
    year: "January 30, 2022",
  },
  {
    movie: "The Worst Person in the World",
    year: "February 4, 2022",
  },
  {
    movie: "Bigbug",
    year: "February 11, 2022",
  },
  {
    movie: "The Sky Is Everywhere",
    year: "February 11, 2022",
  },
  {
    movie: "Fistful of Vengeance",
    year: "February 14, 2022",
  },
];

const ul = document.createElement("ul");
document.body.append(ul);

for(let i = 0; i < movies.length; i++){
  const li = document.createElement("li");
  li.innerText = `${movies[i].movie} - ${movies[i].year}`;
  document.body.append(li)

}


