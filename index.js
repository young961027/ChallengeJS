// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const clock = document.querySelector("#js-clock");
function getTime() {
  // Don't delete this.
  let now = new Date();
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  let gap = Math.floor((xmasDay - now) / 1000);
  const daysToX = Math.floor(gap / 86400);
  gap = gap - daysToX * 86400;
  const hoursToX = Math.floor(gap / 3600);
  gap = gap - hoursToX * 3600;
  const minutesToX = Math.floor(gap / 60);
  gap = gap - minutesToX * 60;
  clock.innerText = `${daysToX < 10 ? `0${daysToX}` : daysToX}d ${
    hoursToX < 10 ? `0${hoursToX}` : hoursToX
  }h ${minutesToX < 10 ? `0${minutesToX}` : minutesToX}m ${
    gap < 10 ? `0${gap}` : gap
  }s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();