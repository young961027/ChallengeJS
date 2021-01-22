const status = document.querySelector(".status");
const clear = document.querySelector(".clear");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

let num1 = 0;
let num2 = 0;
let num = 0;
let wasOp = 0;
let op1 = "";
let op = "";
let opCount = 0;
let result = 0;

function handleClear(event) {
    wasOp = 0;
    result = 0;
    opCount = 0;
    status.innerText = result;
}

function handleNumber(event) {
    const value = event.target.innerText;
    const now = status.innerText;
    if(now !== "0") {
        if(wasOp){
            status.innerText = value;
            wasOp = 0;
        } else {
            status.innerText = status.innerText + value;
        }
    } else {
        status.innerText = value;
        wasOp = 0;
    }
}

function handleOperator(event) {
    wasOp = 1;
    if(opCount === 0) {
        num1 = parseInt(status.innerText);
        op1 = event.target.innerText;
    } else if(opCount === 1) {
        num2 = parseInt(status.innerText);
        op = event.target.innerText;
        if(op1 === "+") {
            console.log(num1,num2,op1);
            result = num1 + num2;
        } else if (op1 === "-") {
            result = num1 - num2;
        } else if (op1 === "*") {
            result = num1 * num2;
        } else if (op1 === "/") {
            result = num1 / num2;
        }
        status.innerText = result;
    } else {
        num = status.innerText;
        if(op === "+") {
            result = result + num;
        } else if (op === "-") {
            result = result - num;
        } else if (op === "*") {
            result = result * num;
        } else if (op === "/") {
            result = result / num;
        }
        op = event.target.innerText;
        status.innerText = result;
    }
    opCount = opCount + 1;
}

function handleEqual(event) {
    wasOp = 1;
    if (opCount === 0) {
        console.log("SHIT");
        handleClear(event);
    } else if(opCount === 1) {
        console.log(num1,num2,op1,opCount);
        num2 = parseInt(status.innerText);
        if(op1 === "+") {
            result = num1 + num2;
        } else if (op1 === "-") {
            result = num1 - num2;
        } else if (op1 === "*") {
            result = num1 * num2;
        } else if (op1 === "/") {
            result = num1 / num2;
        }
        status.innerText = result;
    } else {
        num = status.innerText;
        if(op === "+") {
            result = result + num;
        } else if (op === "-") {
            result = result - num;
        } else if (op === "*") {
            result = result * num;
        } else if (op === "/") {
            result = result / num;
        }
        status.innerText = result;
    }
}

function init() {
    number.forEach(function(Item) {
        Item.addEventListener("click",handleNumber);
    });
    clear.addEventListener("click", handleClear);
    operator.forEach(function(Item) {
        Item.addEventListener("click", handleOperator);
    });
    equal.addEventListener("click",handleEqual);
}

init();