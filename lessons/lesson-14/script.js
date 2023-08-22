// localStorage

// localStorage;

// setItem - add information in localStorage

// localStorage.setItem("name", "Anzhelika");
// localStorage.setItem("gender", "female");

// localStorage.setItem("name", "Ivan");

// getItem

// const nameLocal = localStorage.getItem("name");
// const p = document.createElement("p");
// p.innerText = nameLocal;
// document.body.append(p);

// removeItem

// localStorage.removeItem("gender");

// localStorage.clear();


// const btn = document.querySelector("#toggle");

// btn.onclick = () => {
//     const number = localStorage.getItem("value");
//     if(number === "1") {
//         localStorage.setItem("value", 0);
//     }else {
//         localStorage.setItem("value", 1);
//     }
// };


// Задача. Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.

// const form = document.querySelector("form");
// const input = document.querySelector("#text");

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const inputText = input.value;
//     localStorage.setItem("form", inputText);
// };


// Задача. Добавьте еще одну кнопку "Загрузить". При нажатии на эту кнопку, данные, сохраненные в localStorage, должны загружаться обратно в поле ввода. При отправке формы input должен очищаться
// Задача. Добавить кнопку, которая очищает localStorage.

// const form = document.querySelector("form");
// const input = document.querySelector("#text");
// const btn = document.querySelector("#btn");
// const removeBtn = document.querySelector("#remove");

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const inputText = input.value;
//     localStorage.setItem("form", inputText);
//     input.value = ""; 
// };

// btn.onclick = () => {
//     input.value = localStorage.getItem("form");
    
// }

// removeBtn.onclick = () => {
//     localStorage.removeItem("form");
//     input.value = "";
// }


//////////////////////////////////////////////////

// const btn = document.querySelector("#toggle");
// const body = document.body;

// btn.onclick = () => {
//     if(body.classList.contains("light-mode")){
//         body.classList.replace("light-mode", "dark-mode");
//         localStorage.setItem("mode", "dark");
//     }else{
//         body.classList.replace("dark-mode", "light-mode");
//         localStorage.setItem("mode", "light");
//     }
// };



// const mode = localStorage.getItem('mode');
// if(mode === "dark") body.classList.replace("light-mode", "dark-mode");


////////////////////////////////////////


// const minusButton = document.createElement("button");
// minusButton.innerText = "-";

// const plusButton = document.createElement("button");
// plusButton.innerText = "+";

// document.body.append(minusButton, plusButton);

const minusButton = document.querySelector("#minusButton");
const plusButton = document.querySelector("#plusButton");
const p = document.querySelector("#counter");
const text = document.querySelector(".content");

// const counter = document.createElement("p");
// counter.innerText = "0";

// document.body.appendChild(counter);

minusButton.onclick = () => {
    counter.innerText --;
    localStorage.setItem("count", "-");
    if(count === text){
        const random = localStorage.getItem("count");
        console.log(random)
    }
}
plusButton.onclick = () => {
    counter.innerText ++;
    localStorage.setItem("count", "+");
    if(count === text){
        const random = localStorage.getItem("count");
        console.log(random)
    }
}

const count = localStorage.getItem("count");

// let number = 0;