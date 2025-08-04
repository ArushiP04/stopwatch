let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCounter = 1;

const display = document.getElementById("time-display");
const lapList = document.getElementById("lap-list");

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  return `${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  lapList.innerHTML = '';
  lapCounter = 1;
}

function recordLap() {
  const lapTime = formatTime(elapsedTime);
  const li = document.createElement("li");
  li.textContent = `Lap ${lapCounter++}: ${lapTime}`;
  lapList.appendChild(li);
}

// Event Listeners
document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("pause-btn").addEventListener("click", pauseTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
document.getElementById("lap-btn").addEventListener("click", recordLap);

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});
