let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[date.getDay()];
let currentHour = date.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinute = date.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}

let dateTimeElement = document.querySelector("#current-day-time");
dateTimeElement.innerHTML = `${currentDay}, ${currentHour}:${currentMinute}`;

//function showWeather(response) {
//  let currentTemperature = Math.round(response.data.main.temp);
//  let temperature = document.querySelector("#temperature");
//  temperature.innerHTML = Math.round(response.data.main.temp);
//  let currentCityElement = document.querySelector("#current-city");
//  currentCityElement.innerHTML = response.data.name;
//}
let apiKey = "3ac53775143a9a7e154689ba023c65b3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${apiKey}`;

console.log(apiUrl);
//axios.get(url).then(showWeather);

//function search(event) {
//  event.preventDefault();
//  let input = document.querySelector("#city-input");
//  let currentCity = document.querySelector("#current-city");
//  currentCity.innerHTML = `${input.value}`;
//  let apiKey = "3ac53775143a9a7e154689ba023c65b3";
//  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`;
//  axios.get(url).then(showWeather);
//}
//let form = document.querySelector("#search-form");
//form.addEventListener("submit", search);

//function showWeather2(response) {
//  let currentTemperature = Math.round(response.data.main.temp);
//  let temperature = document.querySelector("#temperature");
//  temperature.innerHTML = `${currentTemperature}`;
//}
//function showLocation(position) {
//  let apiK = "3ac53775143a9a7e154689ba023c65b3";
//  let lat = position.coords.latitude;
//  let lon = position.coords.longitude;
//  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiK}`;
//  axios.get(url).then(showWeather2);
//}

//function getLocation() {
//  navigator.geolocation.getCurrentPosition(showLocation);
//}

//let currentLocation = document.querySelector(".location-button");
//currentLocation.addEventListener("click", getLocation);

//function convertToFahrenheit(event) {
//  event.preventDefault();
//  let temperatureElement = document.querySelector("#temperature");
//  temperatureElement.innerHTML = 66;
//}

//function convertToCelsius(event) {
//  event.preventDefault();
//  let temperatureElement = document.querySelector("#temperature");
//  temperatureElement.innerHTML = 19;
//}

//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", convertToFahrenheit);

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);
