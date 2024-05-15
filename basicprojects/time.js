let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let hours = 0,
  min = 0,
  sec = 0,
  milisec = 0;
let timeshow = document.getElementById("timeshow");
start.onclick = function () {
  timeref = setInterval(startclock, 10);
};

function startclock() {
  milisec = milisec + 10;
  if (milisec == 1000) {
    sec = sec + 1;
    milisec = 0;

    if (sec == 60) {
      min = min + 1;
      sec = 0;

      if (min == 60) {
        hours = hours + 1;
        min = 0;
      }
    }
  }
  let h, m, s, ms;
  if (hours < 10) {
    h = "0" + hours;
  } else {
    h = hours;
  }
  if (min < 10) {
    m = "0" + min;
  } else {
    m = min;
  }
  if (sec < 10) {
    s = "0" + sec;
  } else {
    s = sec;
  }
  if (milisec < 10) {
    ms = "0" + milisec;
  } else if (milisec < 100) {
    ms = "00" + milisec;
  } else {
    ms = milisec;
  }
  timeshow.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
  pause.onclick = function () {
    clearInterval(timeref);
  };
  reset.onclick = function () {
    clearInterval(timeref);
    hours = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    timeshow.innerHTML = "00 : 00 : 00 : 000";
  };
}
