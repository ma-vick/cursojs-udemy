function clock() {
  const clock = document.querySelector(".timer");
  let seconds = 0;
  let timer;

  function createTimer(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function startTimer() {
    timer = setInterval(function () {
      seconds++;
      clock.innerHTML = createTimer(seconds);
    }, 1000);
  }

  document.addEventListener("click", function (event) {
    const element = event.target;

    if (element.classList.contains("start")) {
      clearInterval(timer);
      clock.classList.remove("paused");
      startTimer();
    }

    if (element.classList.contains("pause")) {
      clearInterval(timer);
      clock.classList.add("paused");
    }

    if (element.classList.contains("reset")) {
      clearInterval(timer);
      clock.classList.remove("paused");
      clock.innerHTML = "00:00:00";
      seconds = 0;
    }
  });
}

clock();
