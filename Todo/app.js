const addBtn = document.getElementById('addBtn');
const todoList = []

addBtn.addEventListener("click", function () {
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput.trim() === "") {
        alert("Please enter a todo item.");
        return;
    }
});