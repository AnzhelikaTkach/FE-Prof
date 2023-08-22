const form = document.querySelector("form");
const userInput = document.querySelector("#guessInput");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
let numGuesses = 0;

form.onsubmit = (e) => {
  e.preventDefault();
  numGuesses++;
  const num = parseInt(userInput.value);
  if (num === randomNum) {
    result.innerText = `You won! Number - ${randomNum}! Click on the "Reset" button to play again`;
  } else if (numGuesses >= 3) {
    result.innerText = `You lose(( Number - ${randomNum})`;
  } else {
    if (num < randomNum) {
      result.innerText = "The Number is more! Try again!";
    } else if (num > randomNum) {
      result.innerText = "The Number is less! Try again!";
    }
  }
};

reset.onclick = () => {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
  numGuesses = 0;
  userInput.value = "";
  result.innerText = "";
};
