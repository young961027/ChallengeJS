// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const bd = document.querySelector("body");

function handleResize(event) {
  let size = window.innerWidth;
  if (size < 400) {
    bd.style.backgroundColor = "deepskyblue";
  } else if (size < 600) {
    bd.style.backgroundColor = "blueviolet";
  } else {
    bd.style.backgroundColor = "orange";
  }
}

function init() {
  window.addEventListener("resize", handleResize);
}

init();
