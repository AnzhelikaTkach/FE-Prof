



// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”. 
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>

// async function getUser(id){

//     try{
//        const idRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         if(!idRes.ok){
//             throw new Error("Такого пользователя нет");
//         }
//        const userId = await idRes.json();
//         return userId;

//     } catch (e){
//         console.log(e.message)
//     }
// }

// 
// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) получить все посты пользователя.Эти данные функция должна возвращать.
// Ссылка: 
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>
// Данные должны быть в виде объекта 

// {
// 	user: {...},
// 	posts: [...]
// }

// async function getUser(id){
//     try{
//         const idRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const userPostsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//         if(!idRes.ok || !userPostsRes.ok){
//             throw new Error("Такого пользователя нет");
//             }
//         const userId = await idRes.json();
//         const userPosts = await userPostsRes.json();
//         return console.log({user:userId, posts:userPosts});
//         } catch (e){
//             console.log(e.message)
//         }
// }
// getUser(1);


// Создать функцию, которая получает данные о пользователе и  добавляет div с данными о пользователе и всеми его постами. Возвращаемая карточка должна иметь следующую структуру.
/* <div class=”user-container”>
	<div class=”user”>
		<p>Имя пользователя</p>
		<p>Почта пользователя</p>
	</div>
	<div class=”posts”>
		<div class=”item”>
			<p>Название поста</p>
			<p>Текст поста</p>
		</div>
		<div class=”item”>
			<p>Название поста</p>
			<p>Текст поста</p>
		</div>
		….….
	</div>
</div> */

// async function getUser(id){
//     try{
//         const idRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const userPostsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//         if(!idRes.ok || !userPostsRes.ok){
//             throw new Error("Такого пользователя нет");
//             }
//         const userId = await idRes.json();
//         const userPosts = await userPostsRes.json();
//         return ({user:userId, posts:userPosts});
//         } catch (e){
//             console.log(e.message)
//         }
// }
// getUser(1);
// const container = document.querySelector(".user-container");

// async function addCard(id) {

//     const user = document.createElement("div");
//     user.classList.add("user");

//     const post = document.createElement("div");
//     post.classList.add("posts");
//     container.append(user, post);

//     const userName = document.createElement("p");
//     const userEmail = document.createElement("div");
//     user.append(userName, userEmail);

//    const getInfo = await getUser(id);
//    console.log(getInfo);


//    userName.innerText = getInfo.user.name;
//    userEmail.innerText = getInfo.user.email;

//    getInfo.posts.forEach(element => {
//     const item = document.createElement("div");
//     item.classList.add("item");
//     post.append(item);

//     const namePost = document.createElement("p");
//     const textPost = document.createElement("p");
//     item.append(namePost, textPost);

//     namePost.innerText = element.title;
//     textPost.innerText = element.body;

//    });

// }
// const buttonL = document.querySelector("#btnLeft");
// const buttonR = document.querySelector("#btnRight");
// let counter = 1;
// addCard(counter)

// buttonL.onclick = () => {
//     if(counter > 1){
//     counter--;
//     container.innerHTML = "";
//     addCard(counter)
// }

// }
// buttonR.onclick = () => {
//     if(counter < 10){
//     counter++;
//     container.innerHTML = "";
//     addCard(counter);
//     }
// }


// Добавить в интерфейсе две кнопки (<- , ->) позволяющая переключаться между пользователями. При нажатии на стрелку в лево должен отправиться запрос на получение данных про пользователя с меньшим id, а при нажатии на кпопку в право данные про следующего пользователя


// async function getUser(id){
//     try{
//         const idRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const userPostsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//         if(!idRes.ok || !userPostsRes.ok){
//             throw new Error("Такого пользователя нет");
//             }
//         const userId = await idRes.json();
//         const userPosts = await userPostsRes.json();
//         return ({user:userId, posts:userPosts});
//         } catch (e){
//             console.log(e.message)
//         }
// }
// getUser(1);
// const container = document.querySelector(".user-container");

// async function addCard(id) {
//     try{
//     const user = document.createElement("div");
//     user.classList.add("user");

//     const post = document.createElement("div");
//     post.classList.add("posts");
//     container.append(user, post);

//     const userName = document.createElement("p");
//     const userEmail = document.createElement("div");
//     user.append(userName, userEmail);

//    const getInfo = await getUser(id);
//    console.log(getInfo);

//    userName.innerText = getInfo.user.name;
//    userEmail.innerText = getInfo.user.email;

//    getInfo.posts.forEach(element => {
//     const item = document.createElement("div");
//     item.classList.add("item");
//     post.append(item);

//     const namePost = document.createElement("p");
//     const textPost = document.createElement("p");
//     item.append(namePost, textPost);

//     namePost.innerText = element.title;
//     textPost.innerText = element.body;

//     });

//     }catch (e) {
//         const messageErrorId = document.createElement("h2");
//         container.append(messageErrorId);
//         messageErrorId.innerText = `Do not have user with id ${id}`
//     }

// }

// const buttonL = document.querySelector("#btnLeft");
// const buttonR = document.querySelector("#btnRight");
// let counter = 1;
// addCard(counter)

// buttonL.onclick = () => {
//     if(counter > 1){
//     counter--;
//     container.innerHTML = "";
//     addCard(counter)
// }

// }
// buttonR.onclick = () => {
//     counter++;
//     container.innerHTML = "";
//     addCard(counter);
    
// }

// Если при нажатии на кнопку функция, выводящая данные про пользователей, не получает никаких данных , то в интерфейс должно вывестись сообщение “Такого пользователя нет” и номер с пользователем не должен расти. Создаем try/catch функции addCard.

// ID выведенного пользователя должно сохраняться в localStorage и при обновлении страницы должны грузиться данные пользователя, на котором пользователь остановился в прошлый раз.
// async function getUser(id){
//     try{
//         const idRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const userPostsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//         if(!idRes.ok || !userPostsRes.ok){
//             throw new Error("Такого пользователя нет");
//             }
//         const userId = await idRes.json();
//         const userPosts = await userPostsRes.json();
//         return ({user:userId, posts:userPosts});
//         } catch (e){
//             console.log(e.message)
//         }
// }
// getUser(1);
// const container = document.querySelector(".user-container");

// async function addCard(id) {
//     try{
//     const user = document.createElement("div");
//     user.classList.add("user");

//     const post = document.createElement("div");
//     post.classList.add("posts");
//     container.append(user, post);

//     const userName = document.createElement("p");
//     const userEmail = document.createElement("div");
//     user.append(userName, userEmail);

//    const getInfo = await getUser(id);
//    console.log(getInfo);

//    userName.innerText = getInfo.user.name;
//    userEmail.innerText = getInfo.user.email;

//    getInfo.posts.forEach(element => {
//     const item = document.createElement("div");
//     item.classList.add("item");
//     post.append(item);

//     const namePost = document.createElement("p");
//     const textPost = document.createElement("p");
//     item.append(namePost, textPost);

//     namePost.innerText = element.title;
//     textPost.innerText = element.body;

//     });

//     }catch (e) {
//         const messageErrorId = document.createElement("h2");
//         container.append(messageErrorId);
//         messageErrorId.innerText = `Do not have user with id ${id}`
//     }

// }

// const buttonL = document.querySelector("#btnLeft");
// const buttonR = document.querySelector("#btnRight");
// let counter = localStorage.getItem("counter") || 1;
// addCard(counter);

// buttonL.onclick = () => {
//     if(counter > 1){
//     counter--;
//     localStorage.setItem("counter", counter);
//     container.innerHTML = "";
//     addCard(counter);
// }

// }
// buttonR.onclick = () => {
//     counter++;
//     localStorage.setItem("counter", counter);
//     container.innerHTML = "";
//     addCard(counter);
// }


//////////////////////////////////
async function getUser(id) {
    try {
      const [userDataRes, postsDataRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
      ]);
  
      if (!userDataRes.ok && !postsDataRes.ok) {
        throw new Error("Такого пользователя нет");
      }
  
      const userData = await userDataRes.json();
      const postData = await postsDataRes.json();
  
      return ({ user: userData, posts: postData });
    } catch (e) {
      console.log(e.message);
    }
  }
getUser(1);
const container = document.querySelector(".user-container");

async function addCard(id) {
    try{
    const user = document.createElement("div");
    user.classList.add("user");

    const post = document.createElement("div");
    post.classList.add("posts");
    container.append(user, post);

    const userName = document.createElement("p");
    const userEmail = document.createElement("div");
    user.append(userName, userEmail);

   const getInfo = await getUser(id);
   console.log(getInfo);

   userName.innerText = getInfo.user.name;
   userEmail.innerText = getInfo.user.email;

   getInfo.posts.forEach(element => {
    const item = document.createElement("div");
    item.classList.add("item");
    post.append(item);

    const namePost = document.createElement("p");
    const textPost = document.createElement("p");
    item.append(namePost, textPost);

    namePost.innerText = element.title;
    textPost.innerText = element.body;

    });

    }catch (e) {
        const messageErrorId = document.createElement("h2");
        container.append(messageErrorId);
        messageErrorId.innerText = `Do not have user with id ${id}`
    }

}

const buttonL = document.querySelector("#btnLeft");
const buttonR = document.querySelector("#btnRight");
let counter = localStorage.getItem("counter") || 1;
addCard(counter);

buttonL.onclick = () => {
    if(counter > 1){
    counter--;
    localStorage.setItem("counter", counter)
    container.innerHTML = "";
    addCard(counter);
}

}
buttonR.onclick = () => {
    counter++;
    localStorage.setItem("counter", counter)
    container.innerHTML = "";
    addCard(counter);
}
