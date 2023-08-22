// const form = document.querySelector("form");
// const button = document.querySelector("button");

// btn.onclick = (e) => {
//     e.preventDefault();
//     alert("Good");
// };

// form.onsubmit = (e) => {
//     e.preventDefault();
//     alert("Good1");
// }

// const form = document.querySelector(".form");
// const name = document.querySelector("#name");
// const priceInput = document.querySelector("#price");
// const section = document.querySelector("#productsList");

// const arrayProduct = [];
// form.onsubmit = (e) => {
//     e.preventDefault();
//     // console.log("hello")
//     arrayProduct.push({
//         title: name.value,
//         price: priceInput.value
//     });
//     name.value = "";
//     priceInput.value = "";

//     // console.log(arrayProduct);
//     newProducts();
// };

// function createNode(title, price) {
//     const div = document.createElement("div");
//     const h = document.createElement("h2");
//     const h2 = document.createElement("h2");

//     div.append(h, h2);
//     section.append(div);

//     h.innerText = title;
//     h2.innerText = price;

//     div.classList.add("productCard");

// }

// function newProducts(){
//     section.innerHTML = "";
//     for(let i = 0; i < arrayProduct.length; i++){
//         createNode(arrayProduct[i].title, arrayProduct[i].price)
//     }
// }

// Создайте поле ввода(input) и застилизуйте.
// Добавьте к полю ввода слушатель события 'keyup'.
// Когда пользователь набирает текст, отобразите вводимое значение в элементе paragraph или span под полем ввода.

// const inputAction = document.querySelector("input");
// // inputAction.innerText = inputContent

// let inputContent = text.textContent;
// addEventListener("keyup", (e) => {
// // console.log(e.key);
//     const p = document.createElement("p");

//     inputContent += e.key;
//     text.innerText = inputContent;
// });
// document.body.append(p)

// const textInput = document.getElementById('text-input');
// const textOutput = document.getElementById('text-output');

// textInput.addEventListener('keyup', e => {
//   textOutput.innerText = textInput.value;
// })

// form1
const form = document.querySelector(".form");
const _name = document.querySelector("#name");
const priceInput = document.querySelector("#price");

// form2
const searchForm = document.querySelector(".form2");
const searchInput = document.querySelector("#search");

// section for products
const section = document.querySelector("#productsList");
const noProduct = document.createElement("h1");
noProduct.innerText = "No products!";
noProduct.style.textAlign = "center";
section.append(noProduct);

let arrayProduct = [];

form.onsubmit = (e) => {
  e.preventDefault();
  // console.log("hello")
  arrayProduct.push({
    title: _name.value,
    price: priceInput.value,
  });
  _name.value = "";
  priceInput.value = "";

  // console.log(arrayProduct);
  newProducts();
};

function createNode(title, price, index) {
  const div = document.createElement("div");

  const h = document.createElement("h2");
  h.innerText = title;

  const h2 = document.createElement("h2");
  h2.innerText = price;

  const btn = closeBtn();
  btn.onclick = () => {
    section.removeChild(div);

    const result = [];
    //     const btn = closeButton();
    // btn.onclick = () => {
    //     // section.removeChild(div);
    //     const result = [];
    //     for (let i = 0; i < products.length; i++) {
    //         if (i !== index) {
    //             result.push(products[i]);
    //         };
    //     };
    //     arrayProduct = result;
    //     newProduct();

    //     console.log(products)
    // };

    if (arrayProduct.length > 2) {
      for (let i = 0; i < arrayProduct.length; i++) {
        if (i < index) {
          result.push(arrayProduct[i]);
        } else if (i > index) {
          result.push(arrayProduct[i]);
        }
      }
    } else {
      for (let i = 0; i < arrayProduct.length; i++) {
        if (i !== index) result.push(arrayProduct[i]);
      }
    }

    arrayProduct = result;

    if (!arrayProduct.length) {
      section.append(noProduct);
    }
  };

  div.append(h, h2, btn);
  div.classList.add("productCard");

  div.onmouseover = () => {
    btn.style.opacity = "1";
  };

  div.onmouseleave = () => {
    btn.style.opacity = "0";
  };

  section.append(div);
}

function newProducts() {
  section.innerHTML = "";
  for (let i = 0; i < arrayProduct.length; i++) {
    createNode(arrayProduct[i].title, arrayProduct[i].price, i);
  }
}

function closeBtn() {
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("close");
  return btn;
}

form2.onsubmit = (e) => {
  e.preventDefault();
  section.innerHTML = "";
  for (let i = 0; i < arrayProduct.length; i++) {
    if (arrayProduct[i].title === searchInput.value) {
      createNode(arrayProduct[i].title, arrayProduct[i].price, i);
    }
  }
};

// sort button
const sortBtn = document.querySelector("#sortBtn");

sortBtn.onclick = () => {
    arrayProduct.sort((a,b) => a.price - b.price);
    newProducts();
};