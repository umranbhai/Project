const addBtn = document.getElementById('addBtn');
const todoList = []

addBtn.addEventListener("click", function () {
    const todoInput = document.getElementById('todoInput').value;
    // document.getElementById("todoList").innerHTML = `<ul id='todoItems'>${todoInput}</ul>`;
    todoList.push(todoInput);
    const li = document.getElementById("list");
    for (let i = 0; i < todoList.length; i++) {
        // li.append()todoList[];
        // console.log(todoList);
    }
    // console.log(todoList)

});
`````````
// console.log(addBtn)