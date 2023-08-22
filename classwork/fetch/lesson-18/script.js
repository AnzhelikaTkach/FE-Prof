// https://jsonplaceholder.typicode.com/users/1

// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((data) => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((data) => data.json())
// .then((data) => console.log(data))
// .catch((err => console.log(err)));

//////////////////////////////////////////////////////

// На основе скрипта из прошлого пункта создайте функцию, которая получает id пользователя и выводит в консоль данные пользователя.

// function userId(id){
// fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((data) => {
//         if(data.ok){
//             data.json()
//         }else {
//             throw new Error("No user found");
//         }
//     })
//     .then((data) => console.log(data))
//     .catch((err => console.log(err)))
// }

// userId(6)

//////////////////////////////////////////////////////

// Доработайте функцию из прошлого пункта. Функция должна получать два аргумента. Id пользователя и callback функцию, которая вызывается с данными с сервера.

// function userId(id, callback){
// fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((data) => {
//         if(data.ok){
//             return data.json()
//         }else {
//             throw new Error("No user found");
//         }
//     })
//     .then((data) => callback(data))
//     .catch((err => console.log(err)))
// }

// userId(6, function consol(data){console.log(data)})

//////////////////////////////////////////////////////

// function userCard(userData){
//     const cardContainer = document.querySelector("#user-cards");
//     const userDiv = document.createElement("div");
//     const name = document.createElement("h2");
//     name.innerText = userData.name;

//     const email = document.createElement("p");
//     email.innerText = userData.email;

//     const tel = document.createElement("p");
//     tel.innerText = userData.phone;

//     userDiv.append(name, email, tel);
//     cardContainer.append(userDiv);
// }

// function userId(id){
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then((data) => {
//             if(data.ok){
//                 return data.json()
//             }
//         })
//         .catch(err => console.log(err));
//     }
//     Promise.all([userId(1), userId(2)]).then((data) => {
//         for(let i = 0; i< data.length; i++){
//             userCard(data[i])
//         }
//         // let user1 = data[0];
//         // let user2 = data[1];
//         // userCard(user1);
//         // userCard(user2);
//     });
//     // Promise.all([userId(1), userId(2)]).then((data) => console.log(data))
//     // userId(1, (data) => userCard(data));
//     // userId(2, (data) => userCard(data));

// // Post

// const postdata = {
//     userId: 6,
//     title: "Hello",
//     body: "Hello World"
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "Post",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(postdata),
// })
// .then(response => response.json())
// .then((data) => console.log(data))


// Создать форму в интерфейсе, которая принимает title, body и userId и с этими данными отправляет запрос на сервер. Запрос можно взять из прошлого примера. Ответ сервера вывести в консоль.

// const form = document.querySelector("#form");
// const titleInput = document.querySelector("#title");
// const bodyInput = document.querySelector("#body");
// const userIdInput = document.querySelector("#userId");

// const btn = document.querySelector("#btn");

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const postData = {
//         title: titleInput.value,
//         body: bodyInput.value,
//         userId: userIdInput.value
//     }

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "Post",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(postData)
//     })
//     .then(response => response.json())
//     .then((data) => console.log(data));
//     form.reset()
// }


////////////////////////////////////////////////////

// Создать функцию, которая генерирует карточку с постом и использовать ее для отображения данных, пришедших с сервера. В качестве запроса на сервер   https://jsonplaceholder.typicode.com/posts API.

function cartPost(object) {
    const card = document.createElement("div");
    const title = document.createElement("p");
    title.innerText = object.title;

    const body = document.createElement("p");
    body.innerText = object.body;

    const container = document.querySelector("#container");
    container.append(card);
    card.append(title, body);
}

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then((data) => data.forEach(element => {
    cartPost(element)
}));




