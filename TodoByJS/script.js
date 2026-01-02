const button = document.getElementById("add-todo-btn");
const input = document.getElementById("todo-input");
const list = document.querySelector(".list");

let todoList = JSON.parse(localStorage.getItem("todoList")) || []
let editIndex = null

function saveToStorage(){
  localStorage.setItem("todoList",JSON.stringify(todoList))
}

function addTodo() {
  let todoVal = input.value.trim();
  if(!todoVal) return
  if(editIndex==null){
    todoList.push(todoVal)
  }

  todoList[editIndex] = todoVal
  editIndex=null
  button.textContent="save"

  console.log(todoList);
  saveToStorage()
  addList();
  input.value = "";
}

function addList() {
  list.innerHTML =""
  todoList.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = todo;
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    delBtn.innerText = "X";

    editBtn.addEventListener('click',()=>{
      input.value= todoList[index]
      editIndex = index
      button.textContent = "Edit"
    })
    delBtn.addEventListener("click", () => {
      todoList.splice(index, 1);
      saveToStorage()
      addList();
    });
    li.appendChild(delBtn);
    li.appendChild(editBtn)
    list.appendChild(li);
  });
}

const localTodo = JSON.parse(localStorage.getItem("todoList"))


input.addEventListener("keydown",(e)=>{
  if(e.key ==="Enter"){
    addTodo()
  }
})

button.addEventListener("click", addTodo);

addList()

