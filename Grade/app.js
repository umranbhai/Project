const button = document.getElementById("btn");

button.addEventListener("click", function () {
    const studentName = document.getElementById("name").value;
    const studentMarks = document.getElementById("marks").value;
    const resultText = result(studentMarks);
    document.getElementById("result").innerHTML = `Student Name: ${studentName}, Marks: ${studentMarks}, Result: ${resultText}`;
});
function result(studentMarks) {
    if (studentMarks >= 90) {
        return "Grade A";
    } else if (studentMarks >= 75) {
        return "Grade B";
    } else if (studentMarks >= 50) {
        return "Grade C";
    } else {
        return "Fail";
    }
}
// function loop() {
//     for (let i = 0; i <= 10; i++) {
//         if ([i] < 6) {
//             console.log("Found 5, breaking the loop");

//         } else {
//             console.log("Current number is:");
//         }
//     }
// }
// loop();
// calculateButton.addEventListener("click", function () {

//     const billAmount = document.getElementById("billAmount").value;
//     const tip = document.getElementById("tip").value;
//     const calculateButton = calculate();

//     const totalAmount = fun
// });
