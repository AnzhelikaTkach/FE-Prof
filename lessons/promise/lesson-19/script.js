// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
//   });
//   promise1.then(() => {
//     console.log(3);
//   });
// console.log(4);

/////////////////////////////////////////////

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//   });
//   promise1.then(() => {
//     console.log(3);
//   });
//   console.log(4);
// 1 4

/////////////////////////////////////////////

// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1)
//     resolve('success')
//   }));
//   fn().then(res => {
//     console.log(res)
//   });
//   console.log(2)
//1 2 success

/////////////////////////////////////////////

// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
// 	console.log(1);
// })

// promise1.then(res => {
// 	console.log(2)
// })

// console.log("end");
// start 1 end

/////////////////////////////////////////////


// async function getPostAndAuthor() {
//     const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
//     const postData = await postResponse.json();
  
//     const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
//     const authorData = await authorResponse.json();
  
//     return { post: postData, author: authorData };
//   }
  
//   getPostAndAuthor()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

/////////////////////////////////////////////

// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   .then(response => response.json())
//   .then(post => {
//     console.log('Данные поста:', post);
//     const userId = post.userId; // id автора поста

//     // получаем данные автора поста
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => response.json())
//       .then(author => {
//         console.log('Данные автора:', author);
//       });
//   });

/////////////////////////////////////////////

// Задача 1: 
// Используя async await по id комментария выведите в консоль текст поста и комментарий. Для этого нужно отправить два запроса к API jsonplaceholder.com: 

// один для получения поста, связанного с данным комментарием - https://jsonplaceholder.typicode.com/comments/${commentId},

//  и второй - для получения самого комментария - https://jsonplaceholder.typicode.com/posts/${comment.postId}

// Здесь функция получает ID комментария в качестве аргумента.

// async function getPostAndCommentById(commentId) {

//     // Получение комментария по ID
//     const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
//     const comment = await commentResponse.json();

//     // Получение поста по ID комментария
//     const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`);
//     const post = await postResponse.json();

//     console.log(`Post title: ${post.title}\nComment: ${comment.body}`);
  	
// }

// // Пример использования
// getPostAndCommentById(1);

//////////////////////////////////////////////////////

// Доработайте прошлое решение таким образом, чтобы помимо текста поста выводилось имя автора.
// https://jsonplaceholder.typicode.com/users/1

// async function getPostAndCommentById(commentId) {

//     // Получение комментария по ID
//     const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
//     const comment = await commentResponse.json();

//     // Получение поста по ID комментария
//     const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`);
//     const post = await postResponse.json();

//     const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//     const author = await authorResponse.json();

//     console.log(`Author: ${author.username} \nPost title: ${post.title}\nComment: ${comment.body}`);
  	
// }


/////////////////////

// async function getPostAndCommentById(commentId) {

//     // Получение комментария по ID
//     const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
//     const comment = await commentResponse.json();

//     // Получение поста по ID комментария
//     const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`);
//     const post = await postResponse.json();

//     const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${commentId}`)
//     const author = await authorResponse.json();

//     console.log(`Author: ${author.username} \nPost title: ${post.title}\nComment: ${comment.body}`);
   
// }

// Пример использования
// getPostAndCommentById(2);

/////////////////////////////////////////////////
// Создать функцию, которая получает id комментария находит id поста. По этому идентификатору необходимо вывести все комментарии к этому посту.https://jsonplaceholder.typicode.com/posts/${postId}/comments

// async function findComments(idComment) {
//     const idResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${idComment}`);
//     const id = await idResponse.json();

//     const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.postId}/comments`);
//     const comments = await commentsResponse.json();

//     console.log(comments)
// }

// findComments(1);


const form = document.querySelector("#form");
const input = document.querySelector("#idPost");

const btn = document.querySelector("#btn");
const listComments = document.querySelector("#list");

async function returnComment(postId) {
    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    const comments = await commentResponse.json();
    return comments
}

form.onsubmit = async (e) => {
    e.preventDefault();
    listComments.innerHTML = "";
    const comments = await returnComment(parseInt(input.value));
    comments.forEach(elem => {
        const li = document.createElement("li");
        li.innerText = elem.body;

        listComments.append(li);
    })
form.reset();
}