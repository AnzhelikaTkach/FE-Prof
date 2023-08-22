// JSON - JavaScript Object Notation

// stringify,parse

// const person = {id: 1, name1: Joe};
// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// localStorage.setItem("objectStr", jsonString);

// const newObject = localStorage.getItem("objectStr");
// const object = JSON.parse(newObject);


///////////////////////////////////////////////////////////

// const array = "[1, 2, 3]";
// const arrayObj = JSON.parse(array);
// arrayObj.push(4, 5);
// const array1 = JSON.stringify(arrayObj);

// console.log(array1);

//////////////////////////////////////////////////////////

// function setObject(key, object){
//     const newObject = JSON.stringify(object);
//     localStorage.setItem(key, newObject);
// }
// setObject("user", {name: "Joe", age: 33});

// function getObject(key) {
//     const result = localStorage.getItem(key);
//     if(result) {
//         const object = JSON.parse(result);
//         return object;
//     }
//     return null;
// }
// console.log(getObject("user"));

//////////////////////////////////////////////////////////

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

// Создайте HTML-страницу с двумя полями ввода: "Название книги" и "Автор".
// Разместите под этими полями две кнопки: "Добавить в библиотеку" и "Показать библиотеку".
// Когда пользователь заполняет поля и нажимает кнопку "Добавить в библиотеку", вы должны создать объект JavaScript, содержащий информацию из полей ввода (название книги и автор), и добавить этот объект в массив, который хранится в localStorage.
// Когда пользователь нажимает кнопку "Показать библиотеку", вы должны извлечь массив из localStorage и вывести каждую книгу (название и автор) на страницу.

const form = document.querySelector("#library-form");
const bookInput = document.querySelector("#bookName");
const authorInput = document.querySelector("#author");
const addButton = document.querySelector("#add-btn");
const showButton = document.querySelector("#show-btn");

const list = document.querySelector("#book-list");

let books = [];

function addBooks(bookName, author) {
    books.push({bookName, author});
}

function updateBooks() {
    list.innerHTML = "";
    books.forEach(book => {
        const item = document.createElement("li");
        item.innerText = `${book.bookName} - ${book.author}`;
        list.appendChild(item);
    });
}

form.onsubmit = (e) => {
    e.preventDefault();
    const bookName = bookInput.value;
    const author = authorInput.value;
    addBooks(bookName, author);
    updateBooks();
    setArray("books", books);
    bookInput.value = "";
    authorInput.value = "";
};

function setArray(key, array) {
    const newBooks = JSON.stringify(array);
    localStorage.setItem(key, newBooks);
}

function getArray() {
    const objectLocalStorage = localStorage.getItem("books");
    if(objectLocalStorage) {
        const objectItem = JSON.parse(objectLocalStorage);
        books = objectItem;
        updateBooks();
    }
}

getArray("books");