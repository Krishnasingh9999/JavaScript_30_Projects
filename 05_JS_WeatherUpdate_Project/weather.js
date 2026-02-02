const weatherImgs = {
  Clouds: "Images/clouds.png",
  Clear: "Images/clear.png",
  Rain: "Images/rain.png",
  Snow: "Images/snow.png",
  Drizzle: "Images/drizzle.png",
  Mist: "Images/mist.png"
}


const apiKey = "63c583b48e0a3c16d51a862ac842b5a9";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox = document.querySelector("#find");
const searchBtn = document.querySelector(".searchbar button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  let data = await response.json()
  console.log(data)

  const condition = data.weather[0].main;
  weatherIcon.src= weatherImgs[condition] || "Images/mist.png";

  document.querySelector(".cityName").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

  weather.style.display= "block";

}

searchBtn.addEventListener('click', () => checkWeather(searchBox.value));