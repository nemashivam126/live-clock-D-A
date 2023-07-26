var clock = new Date();
const digitalClock = () => {
  var clock = new Date();
  var h = clock.getHours();
  var m = clock.getMinutes().toString().padStart(2, "0");
  var s = clock.getSeconds().toString().padStart(2, "0");
  // var ms = clock.getMilliseconds().toString().padStart(2, '0');
  var period;

  if (h === 0) {
    h = 12;
    period = "AM";
  } else if (h === 12) {
    period = "PM";
  } else if (h > 12) {
    h = h % 12;
    period = "PM";
  } else {
    period = "AM";
  }

  document.querySelector("#displaytime").textContent = `${h}:${m}:${s}`;
  document.querySelector("#ampm").textContent = `${period}`;
};

function analogClock() {
  var hr = document.getElementById("hours");
  var min = document.getElementById("mins");
  var sec = document.getElementById("secs");

  var clock = new Date();
  var s = clock.getSeconds().toString().padStart(2, "0");
  var m = clock.getMinutes().toString().padStart(2, "0");
  var h = clock.getHours();
  
  // var degreeS=s*6;
  // var degreeM=m*6+s*0.1;
  // var degreeH=(h%12)*30+m*0.5;

  var formulaH = (h % 12) / 12;
  var formulaM = m / 60;
  var formulaS = s / 60;

  var degreeH = formulaH * 360 + formulaM * 30;
  var degreeM = formulaM * 360 + formulaS * 6;
  var degreeS = formulaS * 360;
  sec.style.transform = `rotate(${degreeS}deg)`;
  min.style.transform = `rotate(${degreeM}deg)`;
  hr.style.transform = `rotate(${degreeH}deg)`;
}

const showTimeIntervals = () => {
  digitalClock();
  analogClock();
};
const RunningTime = () => {
  setInterval(showTimeIntervals, 1000);
};
RunningTime();
