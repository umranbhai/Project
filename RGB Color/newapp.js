let colorCode = document.getElementById("colorCode");
let score = document.getElementById("score");
let lastScore = document.getElementById("lastScore");
let currentScore = 0;




function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function GenerateColorCode() {
    let red = GenerateRandomNumber(0, 255);
    let green = GenerateRandomNumber(0, 255);
    let blue = GenerateRandomNumber(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;

}

let RGBcolor = GenerateColorCode();


function validateResult(el) {
    let selectedColor = el.target.style.backgroundColor;
    if (selectedColor === RGBcolor) {
        currentScore++;
        score.innerText = currentScore;
    } else {
        currentScore = score.innerText = 0;
    };

    window.localStorage.setItem("score", currentScore);

    StartGame();
};


function StartGame() {
    lastScore.innerText = window.localStorage.getItem("score", currentScore);
    document.getElementById("colorOption").innerHTML = null;
    let randomIndex = GenerateRandomNumber(0, 3);
    RGBcolor = colorCode.innerText = GenerateColorCode();

    for (let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        div.addEventListener('click', validateResult);
        document.getElementById("colorOption").append(div);
        div.classList.add("colorBox");
        div.style.backgroundColor = i === randomIndex ? RGBcolor : GenerateColorCode();
        // console.log(div.style.backgroundColor);
    };
};



window.addEventListener('reload', StartGame());


