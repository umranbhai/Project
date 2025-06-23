let input = document.getElementById("todoInput");
let addButton = document.getElementById("addBtn");
let list = document.getElementById("list");
// let deleteButton = document.getElementById("deleteBtn");



// addButton.addEventListener("click", function () {

//     document.getElementById("list").innerHTML += `<li>${input.value}</li> <button id = "deleteBtn"> delete </button>`;
//     document.getElementById("deleteBtn").addEventListener("click", function () {
//         list.remove(this.appendChild)
//     })
// });


// addButton.addEventListener('click', function () {
//     if (input.value.trim() !== "") {
//         let li = document.createElement("li");
//         li.textContent = input.value;

//         let deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";

//         deleteButton.addEventListener("click", function () {
//             list.removeChild(li);
//         });

//         li.appendChild(deleteButton);
//         list.appendChild(li);

//         input.value = ""; // Clear the input field
//     } else {
//         alert("Please enter a todo item.");
//     }
// })


// addButton.addEventListener('click', function () {

//     let li = document.createElement("li");
//     li.textContent = input.value;
//     list.appendChild(li)

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("dButton");
//     li.appendChild(deleteBtn);


// });

// let dButton = document.querySelectorAll(".delete");

// console.log(dButton);

// dButton.addEventListener("click", function () {
//     list.removeChild("li");
// });