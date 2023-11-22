function getData(response) {
  let temperature = document.querySelector("#temperature");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let description = document.querySelector("#description");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");

  temperature.innerHTML = Math.round(response.data.temperature.current);
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  description.innerHTML = response.data.condition.description;
  time.innerHTML = formatDate(date);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
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
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
//
//
//

//
//
//
//
