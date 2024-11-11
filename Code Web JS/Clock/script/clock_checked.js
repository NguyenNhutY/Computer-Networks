window.onload = function () {
  let seconds = 0;
  let tens = 0;
  let hours = 0;
  let minutes = 0;

  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");
  const appendHours = document.getElementById("hours");
  const appendMinutes = document.getElementById("minutes");

  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  let Interval;

  buttonStart.onclick = startTimer;
  buttonStop.onclick = stopTimer;
  buttonReset.onclick = resetTimer;

  function startTimer() {
    clearInterval(Interval);
    Interval = setInterval(updateTimer, 10);
  }

  function stopTimer() {
    clearInterval(Interval);
  }

  function resetTimer() {
    clearInterval(Interval);
    tens = seconds = hours = minutes = 0;
    updateDisplay();
  }

  function updateTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    } else {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      tens = 0;
      updateDisplay();
    }

    if (seconds > 59) {
      minutes++;
      seconds = 0;
      updateDisplay();
    }

    if (minutes > 59) {
      hours++;
      minutes = 0;
      updateDisplay();
    }
  }

  function updateDisplay() {
    appendTens.innerHTML = tens < 10 ? "0" + tens : tens;
    appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    appendHours.innerHTML = hours < 10 ? "0" + hours : hours;
  }
};
