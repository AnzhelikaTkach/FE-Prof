//form1
const form = document.querySelector(".form");
const _name = document.querySelector("#name");
const priceInput = document.querySelector("#price");

//form2
const form2 = document.querySelector(".form2");
const searchInput = document.querySelector("#search");

// section for products
const section = document.querySelector("#productsList");
const noProduct = document.createElement("h1");
noProduct.innerText = "Нет продуктов!";
noProduct.style.textAlign = "center";
section.append(noProduct);

let products = [];

form.onsubmit = (e) => {
  e.preventDefault();
  products.push({ title: _name.value, price: priceInput.value });
  _name.value = "";
  priceInput.value = "";
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
    if (products.length > 2) {
      for (let i = 0; i < products.length; i++) {
        if (i < index) {
          result.push(products[i]);
        } else if (i > index) {
          result.push(products[i]);
        }
      }
    } else {
      for (let i = 0; i < products.length; i++) {
        if (i !== index) result.push(products[i]);
      }
    }

    products = result;
    // products.splice(id, 1);
    if (!products.length) {
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
  for (let i = 0; i < products.length; i++) {
    createNode(products[i].title, products[i].price, i);
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
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === searchInput.value) {
      createNode(products[i].title, products[i].price, i);
    }
  }
};

// sort button
const sortBtn = document.querySelector("#sortBtn");

sortBtn.onclick = () => {
  products.sort((a, b) => a.price - b.price);
  newProducts();
};
