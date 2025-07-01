// fetch("https://jsonplaceholder.typicode.com/users")

// Fetching data from the API

// .then(function (Response) {
//     return Response.json();
// })
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (error) {
//     console.error("Error fetching the data:", error);
// });


// .then(Response => Response.json())
// .then(data => {
//     console.log(data);
//     // You can manipulate the DOM here to display the data
//     const userList = document.createElement('ul');
//     data.forEach(user => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${user.name} - ${user.email} - ${user.phone}`;
//         userList.appendChild(listItem);
//     });
//     document.body.appendChild(userList);
// })
// .catch(error => console.log("Error fetching the document: error"));


// document.querySelector("#submit").addEventListener("click", function (e) {
//     e.preventDefault(); // Prevent the default form submission behavior 


    // let obj = {
    //     id: 1,
    //     title: document.querySelector("#name").value,
    //     body: document.querySelector("#email").value,
    //     userId: document.querySelector("#userId").value
    // };


    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: "post",
    //     body: JSON.stringify({
    //         id: 1,
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 5,
    //     }),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))



    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: "PUT",
    //     body: JSON.stringify({
    //         id: 1,
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 5,
    //     }),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))https://reqres.in/api/users?page=2
    // 
    //  



    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: "PATCH",
    //     body: JSON.stringify({
    //         id: 1,
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 5,
    //     }),
    //     headers: {

    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))

    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'DELETE',
    //     body: JSON.stringify({
    //         id: 1,
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 5,
    //     }),
    // });

// });

