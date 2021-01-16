// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const country = document.querySelector(".Country");
const greeting = document.querySelector(".js-greeting");
const COUNTRY_LS = "country";
const SHOWING_CN = "showing";

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function paintGreeting(country) {
  greeting.classList.add(SHOWING_CN);
  if (country === "KR") {
    greeting.innerText = "안녕하세요!";
  } else if (country === "GR") {
    greeting.innerText = "Καλημέρα!";
  } else if (country === "TK") {
    greeting.innerText = "Günaydın!";
  } else if (country === "FL") {
    greeting.innerText = "Hyvää huomenta!";
  }
}

function handleChange(event) {
  const currentValue = event.target.value;
  country.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  saveCountry(currentValue);
  paintGreeting(currentValue);
}

function asKCountry() {
  country.classList.add(SHOWING_CN);
  country.addEventListener("change", handleChange);
}

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  if (currentCountry === null) {
    asKCountry();
  } else {
    paintGreeting(currentCountry);
  }
}

function init() {
  loadCountry();
}

init();