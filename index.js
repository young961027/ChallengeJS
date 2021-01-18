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
  localStorage.setItem(PEND_LS, JSON.stringify(toDoPending));
}

function handleDel(event) {
  const li = event.target.parentNode;
  const cleanPending = toDoPending.filter(function (toDo) {
    return toDo.id !== parseInt(li.id, 10);
  });
  while (pendList.firstChild) {
    pendList.removeChild(pendList.firstChild);
  }
  idNum = 1;
  cleanPending.forEach(function (toDo) {
    toDo.id = idNum;
    paintPending(toDo.text);
  });
  toDoPending = cleanPending;
  savePending();
}

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