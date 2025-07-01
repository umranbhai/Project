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
    // more questions...
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;

    let optionsHTML = "";
    q.options.forEach(option => {
        optionsHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}


function checkAnswer(selected) {
    let correct = questions[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }

    document.querySelectorAll("#options button").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "red";
        }
    });
}
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    document.getElementById("score").textContent = `${score} out of ${questions.length}`;
}
