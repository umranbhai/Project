let colorCode = document.getElementById("colorCode");
let randomColor = null;
let colorBoxes = document.getElementById("colorOption")

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateColor() {
    let red = GenerateRandomNumber(0, 255);
    let green = GenerateRandomNumber(0, 255);
    let blue = GenerateRandomNumber(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;

}

function validateResult(el) {
    let selectedColor = el.target.style.backgroundColor;
    console.log(selectedColor === randomColor);

}

function startGame() {
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