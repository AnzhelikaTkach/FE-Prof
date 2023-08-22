// Задача:
// Создать массив с данными о странах в компоненте App.
// Передать каждую страну через пропсы в компонент Country.
// В компоненте Country принять данные из props и отобразить их в JSX с применением стилей.
import React from 'react'

function Country({ country, city, language}) {
  return (
    <div>
        <h1 style={{backgroundColor: country === "Germany" ? "black" : "white", color: "white", padding: "10px"}}>{country}</h1>
        <p style={{backgroundColor: city === "Berlin" ? "yellow" : "white",padding: "10px"}}>{city}</p>
        <p style={{backgroundColor: "red"=== "Germany"}}>{language}</p>
    </div>
  )
}

export default Country