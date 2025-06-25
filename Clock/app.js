let clock = document.querySelector('#clock');
let button = document.querySelector('#stop-button');
let isRunning = false;



function showTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let showTime = clock.innerHTML = `${hours} : ${minutes} : ${seconds} `;

}
let interval = setInterval(() => { showTime() }, 1000);


button.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        console.log('Clock is running');
        clearInterval(interval);

    } else {
        isRunning = false;
        console.log('Clock is stopped');
        interval = setInterval(() => { showTime() }, 1000);

    }
});


// let startTime;
// let intervalId;

// const btn = document.getElementById('timerBtn');
// const display = document.getElementById('timeDisplay');

// console.log(!isRunning)

// btn.addEventListener('click', () => {
//     if (!isRunning) {
//         // Start the timer
//         isRunning = true;
//         btn.textContent = 'Stop Timer';
//         startTime = Date.now();

//         intervalId = setInterval(() => {
//             const elapsed = (Date.now() - startTime) / 1000;
//             display.textContent = elapsed.toFixed(2) + ' seconds';
//         }, 100); // updates every 100ms
//     } else {
//         // Stop the timer
//         isRunning = false;
//         btn.textContent = 'Start Timer';
//         clearInterval(intervalId);
//     }
// }); 
