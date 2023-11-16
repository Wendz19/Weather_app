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
//
//
//

//
//
//
//
