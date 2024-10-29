let timerInterval;
let timeRemaining = 10 * 60; // 10 minutes in seconds

function updateDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById("timerDisplay").textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateDisplay();
      } else {
        stopTimer();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timeRemaining = 10 * 60;
  updateDisplay();
}

function adjustTimer(seconds) {
  timeRemaining = Math.max(0, timeRemaining + seconds);
  updateDisplay();
}

// Initialize display
updateDisplay();
