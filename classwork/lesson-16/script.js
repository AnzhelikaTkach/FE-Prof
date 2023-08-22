// const form = document.querySelector("#product-form");
// const nameInput = document.querySelector("#name");
// const priceInput = document.querySelector("#price");

// const list = document.querySelector("#product-list");

// let products = [];

// function addProduct(name, price) {
//     products.push({name, price});
// }

// function updateProducts() {
//     list.innerHTML = "";
//     products.forEach(product => {
//         const item = document.createElement("li");
//         item.innerText = `${product.name} - ${product.price}$`;
//         list.appendChild(item);
//     });
// }

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const nameProduct = nameInput.value;
//     const priceProduct = priceInput.value;
//     addProduct(nameProduct, priceProduct);
//     updateProducts();
//     setArray("products", products);
//     nameInput.value = "";
//     priceInput.value = "";
// };

// function setArray(key, array) {
//     const newProducts = JSON.stringify(array);
//     localStorage.setItem(key, newProducts);
// }

// function getArray() {
//     const objectLocalStorage = localStorage.getItem("products");
//     if(objectLocalStorage) {
//         const objectItem = JSON.parse(objectLocalStorage);
//         products = objectItem;
//         updateProducts();
//     }
// }

// getArray("products");

// Задача: Создание интерактивной библиотеки книг
// Подзадачи:
// 1.	HTML структура. Создать HTML-форму с полями для ввода информации о книге: название, автор, год издания и количество страниц. Добавить кнопку для отправки формы.
// 2.	Отображение книг. Написать функцию JavaScript, которая будет создавать элемент списка для каждой книги и добавлять его в список на странице.
// 3.	Добавление книг. Добавить обработчик событий для формы, который будет считывать информацию из полей ввода и добавлять новую книгу в список.
// 4.	Поиск книг. Добавить поле для поиска и написать функцию, которая будет фильтровать книги(по названию) в списке по введенному тексту.
// 5.	Сортировка книг. Добавить элемент select для выбора сортировки. Написать функцию, которая будет сортировать книги в списке в зависимости от выбранного варианта. (варианты придумайте сами).
// 6.	Хранение книг. Использовать localStorage для сохранения книг между сессиями браузера. Должны сохраняться все книги.

const form = document.querySelector("#library-form");
const autorInput = document.querySelector("#name");
const bookInput = document.querySelector("#book");
const yearInput = document.querySelector("#year");
const pageInput = document.querySelector("#pages");

const books = document.querySelector("#library-list");

const showBtn = document.querySelector("#show-all");
const cleanBtn = document.querySelector("#clean-all");
const searchBooks = document.querySelector("#search-books");
const sortBooks = document.querySelector("#sort-books");

let library = [];

function addProduct(name, autor, year, pages) {
    products.push({name, autor, year, pages});
}

function updateBooks (array = library) {
    list.innerText = "";
    array.forEach((book) => {
        const item = document.createElement("li");
        item
    })
}