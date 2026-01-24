const API_KEY = `f71d5d4c0819cbcbfe596218e699a55f`;
const form = document.querySelector("form");
const weather = document.querySelector("#weather")
const search = document.querySelector("#search");


// const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = ` https://openweathermap.org/img/wn${data.wearher[0].icon}@2x.png`

const getWeather = async (city) =>{
        weather.innerHTML= `<h2>Loading ho rha hai wait kro...</h2>`

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data);
}

const showWeather =  (data) =>{
    if(data.cod=="404"){
        weather.innerHTML= `<h2>City not found </h2>`
        return;
    }
    weather.innerHTML = `<div class="row" id="weather">
            <div class="image">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div class="celc">
                <h2>${data.main.temp} ℃ </h2>
                <h4>${data.weather[0].main}</h4>
            </div>`
}
form.addEventListener(
    "submit", function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)