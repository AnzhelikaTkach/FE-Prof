// 1)Найдите общие элементы(в виде массива) между двумя массивами.
// Пример: [1,2,3], [4,2,1] => [1,2]
const array1 = [1,2,3];
const array2 = [4,2,1];
let newArray = [];

for(let i = 0; i < array1.length ; i++){
    for(let j = 0; j < array2.length; j++){
        if(array1[i] === array2[j]){
        newArray.push(array1[i]);
        
    
    }

    }
}
console.log(newArray);


// 2)Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.
// 3)Предыдущее задание делаем с объектом. (как ключ передаем i).
// 4)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].
// 5)Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутов виде. Пример: “cat” => “tac”
// 6)Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// 7)Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.