let city = localStorage.getItem('city');


let ville = document.getElementById('city');
let temp = document.getElementById('temp');
let tempres = document.getElementById('tempres')
let tempmin = document.getElementById('tempmin')
let tempmax = document.getElementById('tempmax')
let tps = document.getElementById('tps')
let hum = document.getElementById('hum')

function meteo() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d8e0fe4a263fe387681b8a0bd1016572', {
        method: 'get'
    }).then(response => response.json()
    ).then((response) => {
        let temperature = Math.round((response.main.temp - 32) / 18);
        let temperaturemin = (response.main.temp_min - 32) / 18;
        let temperaturemax = (response.main.temp_max - 32) / 18;

        ville.innerHTML = "La ville sélectionnée est : " + response.name;
        temp.innerHTML = "La température est de " + temperature + " degrés";
        tempmin.innerHTML = "La température minimale est de " + temperaturemin + " degrés";
        tempmax.innerHTML = "La température maximale est de " + temperaturemax + " degrés";
        tps.innerHTML = "Le temps est " + response.weather[0].main;
        hum.innerHTML = "L'humidité est de " + response.main.humidity;
    })
        .catch((err) => {
            console.log(err);
        })
}
meteo()

let btnCity = document.getElementById("seeCity")
btnCity.addEventListener("click", seeCity);
function seeCity() {
    location.href = "td5.html";
}
