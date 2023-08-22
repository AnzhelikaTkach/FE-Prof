// createElement("tagName");

// const text = document.createElement("p");
// text.innerText ="Text text!!!";

// append, appendChild
// appendChild - one element
// appendChild(p)
// appendChild(a)
// append - one and more elements / text
// append("Text shcbhbc", p, );

// document.body.append(text);

// const div = document.createElement('div');
// const _name = document.createElement('h3');
// const advice = document.createElement('p');

// _name.innerText = "Anzhelika";
// advice.innerText = "No one stop you from being happy!";

// div.append(_name, advice);
// document.body.appendChild(div);

// Exersice 1
// Создать множество параграфов с числами от 0 до 19 и добавить в див с id container, который находится в HTML документе.

// const number = document.querySelector("#container");

// for(let i = 0; i <= 19; i++){
//     const num = document.createElement('p');
//     num.innerText = i;
//     number.appendChild(num);
// }


// Exersice 2
// Создайте маркированный список с  нечетными числами из диапазона от 1 до 10 и добавьте этот список в body.

// const list = document.createElement('ul');

// for( let i = 1; i <= 10; i++){
//     if( i % 2 !== 0){
//         const listLi = document.createElement('li');
//         listLi.innerText = i;
//         list.appendChild(listLi);
//     }
// }
// document.body.appendChild(list);

// Exersice 3
// Создайте пронумерованный список из квадратов чисел от 1 до 10.

// const list = document.createElement('ol');

// for( let i = 1; i <= 10; i++){

//     let listOfLi = document.createElement('li');
//     listOfLi.innerText = i ** 2;
//     list.appendChild(listOfLi);
    
// }
// document.body.appendChild(list);



// Exersice 4++

// const imgSrc = prompt("Add image's source:");
// const linkHref = prompt('Add link:');

// const image = document.createElement('img');
// image.setAttribute("src", imgSrc);

// const link = document.createElement('a');
// // link.innerText = "Link from user";
// link.setAttribute("href", linkHref);
// link.setAttribute("target", "_blank"); 
// link.append(image);

// document.body.append( link);


// Exersice 5

// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в div #root.

//  let links = [
//         {
//           title: "Google",
//           link: "https://www.google.com/",
//         },
//         {
//           title: "Baidu",
//           link: "http://www.baidu.com/",
//         },
//         {
//           title: "Bing",
//           link: "https://www.bing.com/",
//         },
//         {
//           title: "Yahoo!",
//           link: "https://www.yahoo.com/",
//         },
//         {
//           title: "Yandex(dzen)",
//           link: "https://www.dzen.ru/",
//         },
//       ];
// const div = document.createElement("div");
// div.setAttribute("id", "root");
// document.body.appendChild(div);

// for(let i = 0; i < links.length; i++){
//     const link = document.createElement("a");
//     link.setAttribute("href", links[i].link);
//     link.innerText = links[i]. title;

//     div.appendChild(link);
// }



// Exersice 6
// Создаем функцию, которая как аргумент принимает ссылку на картинку и ссылку на сайт и возвращает картинку со ссылкой внутри.
function myFunction(image, link){
    const links = document.createElement("a");
    links.setAttribute("href", link);

    const images = document.createElement('img');
    images.setAttribute("src", image);   
    links.append(images);
    return links;
}
const imageWithLink = myFunction("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89", "https://www.pexels.com/");

document.body.appendChild(imageWithLink);

// function sylk (img, sayt){
//     let elementA = document.createElement('a');
//     elementA.setAttribute("href", sayt );
//     let  imga = document.createElement("img");
//     imga.setAttribute("src", img);
//     elementA.append(imga);
//     return elementA;
// }
// const funelemment = sylk("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89", "https://www.pexels.com/");

// document.body.append(funelemment);






