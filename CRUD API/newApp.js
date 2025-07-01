fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // for (const key in data) {
        //     if (key === "data") {
        //         const element = data[key];
        //         console.log(key, element);
        //     }
        // }
        // for (let i = 0; i < data.data.length; i++) {
        //     const element = data.data[i];
        //     document.body.innerHTML += `
        //         <div class="user">
        //             <h2>${element.first_name} ${element.last_name}</h2>
        //             <p>Email: ${element.email}</p>
        //             <img src="${element.avatar}" alt="${element.first_name} ${element.last_name}'s avatar">
        //         </div>
        //     `;
        // }

    });




