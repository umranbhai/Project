let button = document.getElementById("locButton");
// let locationInput = document.getElementById("locationInput");
let card = document.getElementById("card");



async function getWeather(lat, long) {
    let position = await fetch(`https://api.weatherapi.com/v1/current.json?key=f594cb7915b249baa9d121207251406&q=${lat},${long}&aqi=yes
`);
    // console.log(await position.json());
    let data = await position.json();
    return data;

}

// function success(position) {
//     console.log(position)
// };

async function success(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let value = await getWeather(lat, long);
    console.log(value);
};

function error() {
    console.log("Unable to retrieve your location");
}

// button.addEventListener("click", async function () {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         let lat = position.coords.latitude;
//         let long = position.coords.longitude;
//         getWeather(lat, long);
//     });

// });


button.addEventListener("click", async function () {
    navigator.geolocation.getCurrentPosition(success, error,);

});