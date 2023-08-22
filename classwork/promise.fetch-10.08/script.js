//
// -------------------------------------------------------------------------
// Простое разрешение и обработка promessa. Создайте промис, который разрешается через 2 секунды и возвращает строку "промис выполнен".

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise success");
//   }, 1000);
// });

// newPromise.then((suc) => {
//   console.log(suc);
// });

// -------------------------------------------------------------------------
// Создайте два promessa которые разрешаются через случайная количество времени. Дождитесь их выполнения и выведите результаты одновременно.

// const firstPr = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("first promise success");
//   }, Math.random() * 1000);
// });
// const secondPr = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("second promise success");
//   }, Math.random() * 1000);
// });

// Promise.all([firstPr, secondPr]).then((suc) => {
//   console.log(suc);
// });

// -------------------------------------------------------------------------
// Создайте функцию, которая использует Fetch API для получения данных из общедоступного API (например,  JSONPlaceholder) и записывает ответ в Консоль.

// function dat() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((dt) => {
//       console.log(dt);
//     });
// }
// dat();

// -----------------------------------------------------------

// Создайте функцию, которая получает список постов из API и динамический отображает их на веб сайте.https://jsonplaceholder.typicode.com/posts/

// function listOfPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => data.json())
//     .then((dt) => {
//       dt.forEach((elem) => {
//         console.log(dt);
//         const header = document.createElement("h2");
//         const paragraph = document.createElement("p");
//         document.body.append(header, paragraph);
//         paragraph.innerText = elem.body;
//         header.innerText = elem.id;
//       });
//     });
// }
// listOfPosts();

// -------------------------------------------------------

//  Создать функцию которая получает список постов из API и динамический отображает их на веб странице.
// async function getPosts() {
//   try {
//     const postsR = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const postsD = await postsR.json();
//     postsD.forEach((elem) => {
//       const header = document.createElement("h2");
//       const paragraph = document.createElement("p");
//       document.body.append(header, paragraph);
//       paragraph.innerText = elem.body;
//       header.innerText = elem.id;
//     });
//   } catch (e) {
//     console.log(e.message);
//   }
// }
// getPosts();

// --------------------------------------------------------

// Создайте функцию которая получает Список задач todo Для определённого пользователя на Джэйсон пс holder API и отображает их .

// async function todo (userId) {
// const a = await fetch(`https://jsonplaceholder.typicode.com/todos?userId${userId}`);
// console.log(a);
// const b = await a.json();
//     b.forEach((elem) => {
//       const header = document.createElement("h2");
//       const paragraph = document.createElement("p");
//       document.body.append(header, paragraph);
//       paragraph.innerText = elem.title;
//       header.innerText = elem.completed;
//     });
//     console.log(b);
// }

// todo();

// -------------------------------------------------------
async function dataAboutUser(id) {
  // const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const [users, posts] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
  ]);
  const user1 = await users.json();
  const post1 = await posts.json();

  return {user: user1, post: post1}
}
console.log(dataAboutUser(1));