function SearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#app-city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElemant = document.querySelector("#search-form");
searchFormElemant.addEventListener("submit", SearchSubmit);
