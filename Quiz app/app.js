let question1 = document.getElementById('question1');
let submit = document.getElementById('submit');
let nextQuestion = document.getElementById('nextQuestion');
let resultDiv = document.getElementById('result');


let nextIndex = 0;


const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "2"],
        answer: "4"
    },
    {
        question: "5 + 2 = ?",
        options: ["3", "7", "5", "2"],
        answer: "7"
    },
    {
        question: "2 + 8 = ?",
        options: ["3", "4", "10", "2"],
        answer: "10"
    },
];


nextQuestion.addEventListener('click', function nextQuestion(event) {
    resultDiv.innerText = '';

    let optionsHtml = document.getElementById('options');
    optionsHtml.innerHTML = ''; // Clear previous options
    event.preventDefault();
    nextIndex++;
    document.getElementById('question1').innerText = `${questions[nextIndex].question}`;
    questions[nextIndex].options.forEach((option, index) => {
        optionsHtml.innerHTML += `
        <input type="radio" id="q1a${index + 1}" name="question1" value="${option}">
        <label for="q1a${index + 1}">${option}</label><br>
    `;
    });

});


document.getElementById('question1').innerText = `${questions[0].question}`;

let optionsHtml = document.getElementById('options');
questions[0].options.forEach((option, index) => {
    optionsHtml.innerHTML += `
        <input type="radio" id="q1a${index + 1}" name="question1" value="${option}">
        <label for="q1a${index + 1}">${option}</label><br>
    `;
});



submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    let selectedOption = document.querySelector('input[name="question1"]:checked');

    if (selectedOption) {
        if (selectedOption.value === questions[nextIndex].answer) {
            resultDiv.textContent = "Correct! The answer is " + questions[nextIndex].answer + "."
            nextQuestion.style.display = "block"; // Show the next question button
        } else {
            resultDiv.textContent = "Incorrect. The correct answer is " + questions[nextIndex].answer + ".";
        }
    } else {
        resultDiv.textContent = "Please select an answer.";
    }
});


