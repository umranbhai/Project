
// async function getData() {
//     let serverdata = await fetch('https://jsonplaceholder.typicode.com/posts');
//     console.log(await serverdata.json());
// }

// getData()

let Button = document.getElementById('getWeather');
let cityInput = document.getElementById('city');
let cityName = document.getElementById('city-name');
let cityTemp = document.getElementById('city-temp');
let cityCondition = document.getElementById('city-condition');


async function getWeather(cityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=f594cb7915b249baa9d121207251406&q=${cityName}&aqi=yes
`);
    // console.log(promise.json());

    return promise.json()
}

Button.addEventListener('click', async () => {
    let value = cityInput.value;
    let result = await getWeather(value);
    cityName.innerText = `${result.location.name}, ${result.location.country}`;
    cityTemp.innerText = result.current.temp_c + '°C';
    cityCondition.innerText = result.current.condition.text;

});



