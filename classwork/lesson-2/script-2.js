// const paragraph = document.getElementById("test");

// console.log(paragraph)
// paragraph.innerText = "My first lesson";

// div.innerHTML
// let classEl = document.getElementsByClassName("test");
// console.log(classEl);
// for(let i = 0; i < classEl.length; i++){
//     classEl[i].innerText = "Hello";
// }

// const listOfLi = document.getElementsByClassName("text");
// for(let i = 0; i < listOfLi.length; i++){
// listOfLi[i].innerText = i;
// }
// const special_li = document.querySelectorAll("li.special");
// for( let i = 0; i < special_li.length; i++){
//     special_li[i].innerText = special_li[i].textContent + "!!!"
// }
// const image = document.querySelector("img");
// image.setAttribute(
//     "src",
//     "https://i.pinimg.com/originals/18/4b/8f/184b8f2c10e30326f6ee92b3652408ac.jpg"
// );
// image.setAttribute("alt", "Cat");

// const link = document.querySelectorAll("a");
// let newLink = [];
// for(key in link){
//     newLink.push(link[key].textContent);
// }
// console.log(newLink);
const links = [
    "https://www.google.com/",
    "https://www.freepik.com/",
    "https://www.pexels.com/"
    ]

    const arrLink = document.querySelectorAll("a");
    for(let i = 0; i < arrLink.length; i++){
        arrLink[i].setAttribute(
            "href", links[i]
        )
    }
    