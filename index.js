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