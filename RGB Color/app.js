let colorCode = document.getElementById("colorCode");
let colorBoxes = document.getElementById("colorOption")
let score = 0;
let randomColor = null;

// This is a simple RGB color guessing game.
// The player has to guess the correct RGB color code from a set of randomly generated colors.
// Function to generate a random number between min and max (inclusive)
// This function is used to generate random RGB values for the color boxes.

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateColor() {
    let red = GenerateRandomNumber(0, 255);
    let green = GenerateRandomNumber(0, 255);
    let blue = GenerateRandomNumber(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;

}

function incrementScore() {
    score++;
    document.getElementById("score").innerText = score;
}


function validateResult(el) {
    let selectedColor = el.target.style.backgroundColor;
    if (selectedColor === randomColor) {
        incrementScore();
    } else {
        score = null;
    };

    startGame();


}

function startGame() {
    colorBoxes.innerHTML = null // Clear previous color boxes

    randomColor = generateColor();
    colorCode.innerText = randomColor;

    let randomIndex = GenerateRandomNumber(0, 5);

    for (let i = 0; i < 6; i++) {
        let div = document.createElement("div");
        div.addEventListener("click", validateResult)
        div.style.backgroundColor = i == randomIndex ? randomColor : generateColor();
        div.classList.add("colorBox");
        colorBoxes.appendChild(div);


    };

};

window.addEventListener("load", () => startGame());
