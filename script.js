function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

  const londonTime = new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London", ...options });
  const canadaTime = new Date().toLocaleTimeString("en-CA", { timeZone: "America/Toronto", ...options });

  document.getElementById("london").textContent = londonTime;
  document.getElementById("canada").textContent = canadaTime;
}

updateClock();
setInterval(updateClock, 1000);

document.getElementById("btn").addEventListener("click", function () {
  const worldClock = document.getElementById("world-clock");
  worldClock.style.display = worldClock.style.display === "none" ? "block" : "none";
});