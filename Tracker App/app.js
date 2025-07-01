let text = document.getElementById("text");
let amount = document.getElementById("amount");
let button = document.getElementById("button");

let transactions = JSON.parse(window.localStorage.getItem("transactions")) || [];

transactions.forEach(element => {
    let transactionItem = document.createElement("li");
    transactionItem.classList.add("list");
    transactionItem.innerHTML = `${element.text} <span>${element.amount}</span>`;
    document.getElementById('transactions').appendChild(transactionItem);
});

button.addEventListener("click", function (event) {
    // Prevent default form submission
    event.preventDefault();
    let textValue = text.value;
    let amountValue = amount.value;

    let transaction = {
        text: textValue,
        amount: parseFloat(amountValue)
    };

    transactions.push(transaction);
    console.log(transactions);

    let transactionItem = document.createElement("li")
    transactionItem.classList.add("list");
    transactionItem.innerHTML = `${transaction.text} <span>${transaction.amount}</span>`;
    document.getElementById('transactions').appendChild(transactionItem);
    window.localStorage.setItem("transactions", JSON.stringify(transactions));


    // Check if text is empty
    if (textValue.trim() === "") {
        alert("Please enter a description.");
        return;
    }
    if (amountValue.trim() === "") {
        alert("Please enter a description.");
        return;
    }


});
