function getData(response) {
  let temperature = response.data.temperature.current;
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = Math.round(temperature);
}

function searchTemperature(event) {
  event.preventDefault();
  let headingElement = document.querySelector("#city");
  let searchInput = document.querySelector("#search-bar");
  headingElement.innerHTML = searchInput.value;
  let cityInput = document.querySelector("#search-bar");
  let city = cityInput.value;
  let apiKey = `43dft5a84ob9a003f0c493a68e6b1dbe`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(getData);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchTemperature);

//
let now = new Date();
let minutes = now.getMinutes();
let hours = now.getHours();
let newHour = document.querySelector("#hours");
newHour.innerHTML = hours;
let newMinutes = document.querySelector("#minutes");
newMinutes.innerHTML = minutes;

let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let newDay = document.querySelector("#day");
newDay.innerHTML = day;

if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes > 10) {
  minutes = `0${minutes}`;
}

//
//
//

//
//
//
//
