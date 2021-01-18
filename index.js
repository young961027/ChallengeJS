const PEND_LS = "PENDING";
const FIN_LS = "FINISHED";
const form = document.querySelector(".js-form"),
  input = document.querySelector(".js-input"),
  pendList = document.querySelector(".js-pending"),
  finList = document.querySelector(".js-finished");
let toDoPending = [];
let toDoFinished = [];
let idNum = 1;

function savePending() {
  localStorage.setItem(PEND_LS, JSON.stringify(pendList));
}

function handleDel(event) {}

function handleFin(event) {}

function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDel);
  finBtn.innerText = "✅";
  finBtn.addEventListener("click", handleFin);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = idNum;
  pendList.appendChild(li);
  const pendObj = {
    text,
    id: idNum
  };
  toDoPending.push(pendObj);
  idNum += 1;
  savePending();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintPending(currentValue);
  input.value = "";
}
function loadToDos() {}

function init() {
  loadToDos();
  form.addEventListener("submit", handleSubmit);
}

init();
