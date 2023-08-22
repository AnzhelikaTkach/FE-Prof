// // localStorage.setItem("object", { id: 1, name: "Joe" });
// // alert({ id: 1 });

// // [object, Object]
// // JSON - Javascript Object Notation

// // stringify, parse

// const person = { id: 1, name: "Joe" };
// const jsonString = JSON.stringify(person);
// console.log(jsonString);
// localStorage.setItem("objectStringify", jsonString);

// const newObject = localStorage.getItem("objectStringify");
// const object = JSON.parse(newObject);
// console.log(object);

// const array = "[1, 2,3]";

// function setObject(key, object) {
//   const newObject = JSON.stringify(object);
//   localStorage.setItem(key, newObject);
// }
// setObject("user", { name: "Joe", age: 23 });

// // // [object,Object]

// function getObject(key) {
//   const result = localStorage.getItem(key);
//   if (result) {
//     const object = JSON.parse(result);
//     return object;
//   }
//   return null;
// }

// console.log(getObject("user"));

const form = document.querySelector("#product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const countInput = document.querySelector("#count");

const list = document.querySelector("#product-list");

let products = [];

function addBook(name, price, count, id) {
  products.push({ id, name, price, count });
}

function updateBooks(array = products) {
  list.innerHTML = "";
  array.forEach((product) => {
    const item = document.createElement("li");
    item.innerText = `${product.name} - ${product.price}$(Количество: ${product.count})`;
    list.appendChild(item);
  });
}

form.onsubmit = (e) => {
  e.preventDefault();
  const nameProduct = nameInput.value;
  const priceProduct = priceInput.value;
  const countProduct = countInput.value;
  const idProduct = Date.now();
  addProduct(nameProduct, priceProduct, countProduct, idProduct);
  updateProducts();
  writeLocal();
  nameInput.value = "";
  priceInput.value = "";
  countInput.value = "";
};

function writeLocal() {
  const object = JSON.stringify(products);
  localStorage.setItem("products", object);
}

const savedProducts = JSON.parse(localStorage.getItem("products"));
if (savedProducts) {
  products = savedProducts;
  updateProducts();
}

// Date - object
// now()

// search

const searchInput = document.querySelector("#search");

function filterProducts() {
  const value = searchInput.value.toLowerCase();
  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(value)
  );
  updateProducts(searchProducts);
}

oninput, onchange
searchInput.oninput = filterProducts;
searchInput.onchange = filterProducts;

// sort

// const sortSelect = document.querySelector("#sort");

// switch case

sortSelect.onchange = () => {
  switch (sortSelect.value) {
    case "price-up":
      products.sort((a, b) => a.price - b.price);
      break;
    case "price-down":
      products.sort((a, b) => b.price - a.price);
      break;
    case "count-up":
      products.sort((a, b) => a.count - b.count);
      break;
    case "count-down":
      products.sort((a, b) => b.count - a.count);
      break;
      // default
  }
  updateProducts();
};




