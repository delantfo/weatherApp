let = lon, lat;
let temperature = document.querySelector('.temp');
let summary = doucment.querySelector('.summary');
let loc = document.querySelector('.location');
let icon = document.querySelector('.icon');
const kelvin = 273;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        NavigationPreloadManager.geolocation.getCurrentPosition((position) =>
         console.log(position);
         lon = position.coords.longitude;
         lat = position.coords.latitude;
        
         const key = 'be6bc44459e605c6ac0138ecfe905bf9';
         
         const base = 'http://api.openweathermap.org/data/2.5/weather?lat=${lat}&' +
         'lon=${lon}&appid=${key}';

         fetch(based)
            .then((response) => { return response.json();
            })
            .then((data) => {console.log(data);
            temperature.textContent = Math.Florr(data.main.temp - kelvin)})
    }
})

