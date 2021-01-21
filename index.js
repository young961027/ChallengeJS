const range = document.querySelector(".js-range");
const notice = document.querySelector(".js-notice");
const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const span = document.querySelector(".js-span");
const result = document.querySelector(".js-result");

function handleClick(event) {
  const value = input.value;
  if (value !== "") {
    const answer = Math.floor(Math.random() * range.value);
    span.innerText = `You chose : ${value}, the machine chose : ${answer}`;
    if (parseInt(value) === answer) {
      result.innerText = "YOU WIN!";
    } else {
      result.innerText = "YOU LOST!";
    }
  }
}

function handleInput(event) {
  const value = event.target.value;
  notice.innerText = `Generate a Number between 0 and ${value}`;
}

function init() {
  range.addEventListener("input", handleInput);
  button.addEventListener("click", handleClick);
}

init();
