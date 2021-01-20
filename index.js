const PEND_LS = "PENDING";
const FIN_LS = "FINISHED";
const form = document.querySelector(".js-form"),
  input = document.querySelector(".js-input"),
  pendList = document.querySelector(".js-pending"),
  finList = document.querySelector(".js-finished");
let toDoPending = [];
let toDoFinished = [];
let idNum = 1;
let finNum = 1;

function savePending() {
  localStorage.setItem(PEND_LS, JSON.stringify(toDoPending));
}

function saveFinished() {
  localStorage.setItem(FIN_LS, JSON.stringify(toDoFinished));
}

function handleDelFin(event) {
  const li = event.target.parentNode;
  const cleanFinished = toDoFinished.filter(function (toDo) {
    return toDo.id !== parseInt(li.id, 10);
  });
  while (finList.firstChild) {
    finList.removeChild(finList.firstChild);
  }
  finNum = 1;
  cleanFinished.forEach(function (toDo) {
    toDo.id = finNum;
    paintFinished(toDo.text);
  });
  toDoFinished = cleanFinished;
  saveFinished();
}

function handleDelPend(event) {
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

function handleFin(event) {
  const li = event.target.parentNode;
  const currentValue = toDoPending.filter(function(toDo) {
      return toDo.id === parseInt(li.id, 10);
  });
  currentValue.forEach(function(toDo) {
      paintFinished(toDo.text);
  })
  handleDelPend(event);
}
  
function handleRtn(event) {
    const li = event.target.parentNode;
    const currentValue = toDoFinished.filter(function(toDo) {
        return toDo.id === parseInt(li.id, 10);
    });
    currentValue.forEach(function(toDo) {
        paintPending(toDo.text);
    })
    handleDelFin(event);
}

function paintFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const rtnBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDelFin);
  rtnBtn.innerText = "⏮";
  rtnBtn.addEventListener("click", handleRtn);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(rtnBtn);
  li.id = finNum;
  finList.appendChild(li);
  const finObj = {
    text,
    id: finNum
  };
  toDoFinished.push(finObj);
  finNum += 1;
  saveFinished();
}

function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDelPend);
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

function loadToDos() {
  const loadedPending = localStorage.getItem(PEND_LS);
  const loadedFinished = localStorage.getItem(FIN_LS);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (toDo) {
      paintPending(toDo.text);
    });
  }
  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (toDo) {
      paintFinished(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  form.addEventListener("submit", handleSubmit);
}

init();
