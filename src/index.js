function search(event) {
  event.preventDefault();
  console.log(event);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
