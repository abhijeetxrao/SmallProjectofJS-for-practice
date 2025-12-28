const button = document.getElementById("add-todo-btn");
const input = document.getElementById("todo-input");
const list = document.querySelector(".list");

let todoList = [];

function addTodo() {
  let todoVal = input.value.trim();
  if(!todoVal) return
  todoList.push(todoVal);
  console.log(todoList);
  addList();
  input.value = "";
}

function addList() {
  list.innerHTML =""
  todoList.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = todo;
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", () => {
      todoList.splice(index, 1);
      addList();
    });
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

input.addEventListener("keydown",(e)=>{
  if(e.key ==="Enter"){
    addTodo()
  }
})

button.addEventListener("click", addTodo);
