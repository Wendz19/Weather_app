function getData(response) {
  let temperature = response.data.temperature.current;
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = Math.round(temperature);
  let humidity = response.data.temperature.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = Math.round(humidity);
  let windSpeed = response.data.wind.speed;
  let currentWindSpeed = document.querySelector("#wind-speed");
  currentWindSpeed.innerHTML = windSpeed;
  let time = document.querySelector("#time");
  time.innerHTML = `Tuesday 18:27`;
  let date = response.data.time * 1000;
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
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
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
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
}
//
//
//

//
//
//
//
