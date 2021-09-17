//search by city names
function showTemperature(response){
  let tempData = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${tempData}°C`;
}

function search (event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-Input");
  let cityName = `${cityInput.value}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityName;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7796ed76d4738ed90e39d5875eb78f75&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let currentCity = document.querySelector(".search-form");
currentCity.addEventListener ("submit",search);


//get geolocation
function showYourTemperatureAndCity(response){
  let tempData = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${tempData}°C`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[now.getDay()];
let currentDateandTime = document.querySelector("#date");
currentDateandTime.innerHTML = `${day}, ${hours}:${minutes}`;
}

function showPosition(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7796ed76d4738ed90e39d5875eb78f75&units=metric`;
  axios.get(apiUrl).then(showYourTemperatureAndCity);
}

function getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentPosition = document.querySelector("#current-position-button");
currentPosition.addEventListener("click", getCurrentPosition);

