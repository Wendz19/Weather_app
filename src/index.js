function search(event) {
  event.preventDefault();
}

function displayTemp(response) {
  console.log(response.data);
}
let city = `response.data.city`;
let apiKey = `43dft5a84ob9a003f0c493a68e6b1dbe`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemp);

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", search);
