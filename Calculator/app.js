let input = document.getElementById("inputButton");
let result = document.getElementById("AnswerButton");

// console.log(inputButton)

// function clickButton(el) {
//     console.log(el.innerText)
//     let exp = `${input.innerText}${el.innerText}`;
//     input.innerText = exp;
//     if (['+', '-', '*', '/'].includes(el.innerText)) return;

//     result.innerText = eval(exp);
// }

// function reset() {
//     input.innerText = '0';
//     result.innerText = '0';
// };

// function clickButton(el) {
//     let currentInput = input.querySelector('input').value;
//     let newInput = currentInput === '0' ? el.innerText : currentInput + el.innerText;
//     input.querySelector('input').value = newInput;

//     if (['+', '-', '*', '/'].includes(el.innerText)) return;

//     try {
//         result.querySelector('input').value = eval(newInput);
//     } catch (error) {
//         result.querySelector('input').value = 'Error';
//     }
// }
// function reset() {
//     input.querySelector('input').value = '0';
//     result.querySelector('input').value = '0';
// }

function clickButton(el) {
    let currentInput = el.innerText;
    console.log(currentInput);
    let newInput = input.querySelector('input').value;
    newInput = newInput === '0' ? currentInput : newInput + currentInput;
    input.querySelector('input').value = newInput;
    if (['+', '-', '*', '/'].includes(el.innerText)) return;
    result.querySelector('input').value = eval(newInput)
};

function reset() {
    input.querySelector('input').value = '0';
    result.querySelector('input').value = '0';
}