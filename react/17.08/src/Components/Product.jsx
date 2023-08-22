// Задача:
// Создать массив с данными о продуктах(обязательно id, остальное на свой вкус) в компоненте App.
// Передать каждый продукт через пропсы в компонент Product.
// В компоненте Product принять данные из props и отобразить их в JSX.
import React from "react";

function Product({id, type, price}) {
  return (
    <>
      <div style={{ backgroundColor: type === "fruit" ? "blue" : "red" }}>
        <h1
          style={{
            color: "white",
          }}
        >
          {id}
        </h1>
        <p style={{fontSize: "20px"}}>Price: {price}</p>
      </div>
    </>
  );
}

export default Product;
