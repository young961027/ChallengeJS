const status = document.querySelector(".status");
const clear = document.querySelector(".clear");
const number = document.querySelector(".number");
const operator = document.querySelector(".operator");
const equal = document.querySelector(".equal");

function init() {
    number.addEventListener("click", handleNumber);
    operator.addEventListener("click", handleOperator);
    number.addEventListener("click", handleNumber);
}