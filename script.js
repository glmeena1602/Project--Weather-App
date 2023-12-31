// JavaScript code (script1.js)
const apiKey = "7590864a065d1bd89f76a30a877b6411"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);

    if (!response.ok) {
        console.error("Error fetching weather data:", response.statusText);
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
        return;
    }
else{
    const data = await response.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none"

}
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    if (city) {
        console.log(city)
        checkWeather(city);
        
    } else {
        alert("Please enter a city name");
    }
});
