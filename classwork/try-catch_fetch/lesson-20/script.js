// try{
//     const element = document.querySelector("#test");
//     console.log(element.textContent);
// } catch (e) {
//     console.log("No information found")
// }

// array.from

// function toArray(arg) {
//     try{
//         return Array.from(arg);
//     }catch {
//         return [];
//     }
// }
// console.log("object ===>", toArray({a: 1, b:2}))
// console.log("array ===>", toArray([3, 4, 5]))
// console.log("number ===>", toArray("Roza"));
// console.log("undefined ===>", toArray(undefined));

// console.log(Array.from(6));

//////////////////////////////////////////////////////////

// Задание. Создать функцию, которая в качестве аргумента получает селектор и возвращает содержащийся в этом элементе текст. Если такого элемента нет, то функция должна возвращать null.

// function addSelector(selector) {
//     try {
//         const text = document.querySelector(selector);
//         return text.textContent;
//     } catch {
//         return null;
//     }
// }

// console.log(addSelector("div"));
// console.log(addSelector("p"));

//////////////////////////////////////////////////////////

// Задача. Создать функцию, save_call. Данная функция должна получать функцию в качестве аргумента и вызывать ее, если это функция,а если не функция, то выводить сообщение в консоль “Такой функиции нет”

// function nice() {
//     return console.log("Yes");
// }

// const saveCall = function(functionArg){
//     try {
//         if(typeof functionArg === "function"){
//             functionArg();
//         } else{
//             throw new Error();
//         }
//     }catch {
//         const error = "Такой функиции нет";
//         return error
//     }
// }

// console.log(saveCall("hi"));
// console.log(saveCall(nice));

//////////////////////////////////////////////////////////

// Создайте функцию math_division. Данная функция получает в качестве аргументов два числа и возвращает результат деления первого на второе. Если второй аргумент равен нулю, то функция должна вызвать исключение с текстом “Делить на ноль нельзя”.
// function mathDivision(num1, num2) {
// 	try {
//     if (num2 !== 0) {
// 		return num1 / num2;
// 		} else {
// 		    throw new Error("Делить на ноль нельзя");
// 		}
// 	} catch (e) {
// 		return e.message;
// 	}
// }
// console.log(mathDivision(3, 5));
// console.log(mathDivision(3, 0));

//////////////////////////////////////////////////////////

// async function getPost(id, callback) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//         if(!response.ok){
//             throw new Error("No post found!");
//         }
//         const post = await response.json();
//         callback(post);
//     } catch (e) {
//         console.error(e.message);
//     }
// }
// // getPost(2).then(data => console.log(data));
// // console.log(getPost(200));
// getPost(2, (data) => {
//     console.log(data);
// });
// getPost(200, (data) => {
//     console.log(data);
// });

//////////////////////////////////////////////////////////

// Создать функцию custom_fetch. Данная функция получает API ссылку и callback функцию. Если по указанной ссылке получилось отправить запрос и ответ с кодом 200, то необходимо вызвать переданную функцию и в качестве аргумента передать ответ сервера.

// async function customFetch(link, callback) {
//     try {
//         const response = await fetch(link);
//         if(response.status === 200){
//             const answer = await response.json();
//             callback(answer);
//         } else {
//             throw new Error("Not found");
//         }
//     } catch (e){
//         console.log(e.message);
//     }
// }

// customFetch("https://jsonplaceholder.typicode.com/posts", (a) => {console.log(a)});

//////////////////////////////////////////////////////////

// Напишите функцию, которая принимает URL изображения и асинхронно загружает изображение. Если загрузка прошла успешно, вызовите переданную callback функцию с загруженным изображением в качестве аргумента.
// Пример:  https://jsonplaceholder.typicode.com/photos/

// async function photoURL(link, callback){
//     try {
        
//         const getPicture = await fetch(link);
//         if(getPicture.ok){
//         const picture = await getPicture.json();
//         callback(picture);
//         }else {
//             throw new Error("No picture found")
//         }
//     } catch (e){
//         console.error(e.message);
//     }
// }

// photoURL(" https://jsonplaceholder.typicode.com/photos/1", (data) => {
//     const photo = document.createElement("img");
//     document.body.append(photo);
//     photo.src = data.url;
// })

//////////////////////////////////////////////////////////

// Напишите функцию getUserList, которая асинхронно получает список пользователей с сервера с помощью API. Если запрос выполнен успешно, вызовите callback функцию, передав ей список пользователей в качестве аргумента.
// https://jsonplaceholder.typicode.com/users


async function getUserList(callback){
    try {
        const allUsers = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if(allUsers.ok){
        const users = await allUsers.json();
        callback(users);
        }else{
            throw new Error("user is not found")
        }
    }catch (e) {
        console.error(e.message);
    }
}

getUserList((data) => {
    const list = document.createElement("ul");
document.body.append(list);
data.forEach(element => {
    const li = document.createElement("li");
    li.innerText = element.name;
    list.append(li);
});
    console.log(data);
})