const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

const PENDING_TODOS_LS = "PENDING";
const FINISHED_TODOS_LS = "FINISHED";

function filterFn(toDo) {
  return toDo.id === 1;
}

//해야할 일을 array에 추가함
let pendingListToDos = [];
let finishedListToDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanToDos = pendingListToDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pendingListToDos = cleanToDos;
  savePendingToDos();
}

function deleteFinishedToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanToDos = finishedListToDos.filter(toDo => {
    return toDo.id.toString() !== li.id.toString();
  });
  finishedListToDos = cleanToDos;
  svaeFinishedToDos();
}

const doneTodo = event => {
  const btn = event.target;
  const li = btn.parentNode;
  const todoId = li.id;
  const todoText = li.querySelector("span").innerText;
  pendingList.removeChild(li);
  const cleanToDos = pendingListToDos.filter(toDo => {
    return toDo.id.toString() !== li.id.toString();
  });
  pendingListToDos = cleanToDos;
  savePendingToDos();
  painFinishedToDo(todoText, todoId);
};

function savePendingToDos() {
  localStorage.setItem(PENDING_TODOS_LS, JSON.stringify(pendingListToDos));
  //JSON~는 자바스크립트 object를 string로 바꿔줌
} //toDos를 가져와 로컬에 저장하는 메소드

const svaeFinishedToDos = () => {
  localStorage.setItem(FINISHED_TODOS_LS, JSON.stringify(finishedListToDos));
};

function prevTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const todoText = li.querySelector("span").innerText;
  finishedList.removeChild(li);
  const cleanToDos = finishedListToDos.filter(toDo => {
    return toDo.id.toString() !== li.id.toString();
  });
  finishedListToDos = cleanToDos;
  svaeFinishedToDos();
  paintPendingToDo(todoText);
}

const paintPendingToDo = text => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pendingListToDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  doneBtn.innerHTML = "✅";
  doneBtn.addEventListener("click", doneTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const toDoObj = {
    text,
    id: newId
  };
  pendingListToDos.push(toDoObj);
  savePendingToDos();
};

const painFinishedToDo = (text, id) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const prevBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinishedToDo);
  prevBtn.innerHTML = "⏪";
  prevBtn.addEventListener("click", prevTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(prevBtn);
  li.id = id;
  finishedList.appendChild(li);
  const toDoObj = {
    text,
    id
  };
  finishedListToDos.push(toDoObj);
  svaeFinishedToDos();
};

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintPendingToDo(currentValue);
  toDoInput.value = ""; // todo에 입력이 끝나면 작성창 초기화
}

const loadToDos = () => {
  const loadedPedingToDos = localStorage.getItem(PENDING_TODOS_LS);
  const loadFinishedTodos = localStorage.getItem(FINISHED_TODOS_LS);
  if (loadedPedingToDos !== null) {
    const parsedToDos = JSON.parse(loadedPedingToDos);
    parsedToDos.forEach(toDo => {
      paintPendingToDo(toDo.text);
    });
  }
  if (loadFinishedTodos !== null) {
    const finishedTodos = JSON.parse(loadFinishedTodos);
    finishedTodos.forEach(toDo => {
      painFinishedToDo(toDo.text, toDo.id);
    });
  }
};

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
