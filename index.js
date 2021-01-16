// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const country = document.querySelector(".Country");
const greeting = document.querySelector(".js-greeting");

function saveCountry(text) {
  localStorage.setItem("country", text);
}

function paintGreeting(country) {
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
  saveCountry(currentValue);
  paintGreeting(currentValue);
}

function init() {
  country.addEventListener("change", handleChange);
}

init();
