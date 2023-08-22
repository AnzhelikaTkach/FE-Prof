import React from "react";
import Posts from "./Components/Posts";
import Todo from "./Components/Todo";
import Post from "./Components/Post";
import Product from "./Components/Product";
import Country from "./Components/Country";

// постановка задачи
//         - Задача: Создать массив с данными о делах в компоненте App и сгенерируйте по нему компоненты Todo

// разбор задачи
//         - Генерация массива (не забудьте про ID)
//         - генерация компонентов с использованием метода map (не забудьте про пропс key)

// --------------------------------
// Задача:
// Создать массив с данными о продуктах(обязательно id, остальное на свой вкус) в компоненте App.
// Передать каждый продукт через пропсы в компонент Product.
// В компоненте Product принять данные из props и отобразить их в JSX.

function App() {
  const countries = [
    {
      id: 1,
      country: "Germany",
      city: "Berlin",
      language: "German",
    },
    {
      id: 1,
      country: "USA",
      city: "Florida",
      language: "English",
    },
    {
      id: 1,
      country: "Ukraine",
      city: "Kiew",
      language: "Ukrainish",
    },
  ];

  const productObj = [
    {
      id: 1,
      type: "fruit",
      price: 123,
    },
    {
      id: 2,
      type: "vegetables",
      price: 123,
    },
    {
      id: 3,
      type: "fruit",
      price: 123,
    },
  ];
  const todoList = [
    {
      id: 1,
      taskTitle: "Hello1",
      taskDescription: "My friend1",
      doneFlg: false,
    },
    {
      id: 2,
      taskTitle: "Hello1",
      taskDescription: "My friend1",
      doneFlg: false,
    },
    {
      id: 3,
      taskTitle: "Hello3",
      taskDescription: "My friend3",
      doneFlg: true,
    },
  ];

  const objTodo = {
    taskTitle: "Hello!",
    taskDescription: "My friend",
    doneFlg: true,
  };

  const objPost = {
    title: "Book",
    text: "Kafka",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kafka1906_cropped.jpg/274px-Kafka1906_cropped.jpg",
    marked: false,
  };

  return (
    <div>
      <Post {...objPost} />

      <Todo {...objTodo}/>

      <Posts />

      {todoList.map(todo => (
        <Todo {...todo} key={todo.id}></Todo>
      ))}

      {productObj.map((product) => (
        <Product {...product} key={product.id}></Product>
      ))}

        {countries.map(country => (
          <Country {...country} key={country.id}></Country>
        ))}

    </div>
  );
}

export default App;
