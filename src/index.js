const duration = document.getElementById("duration");
const clear = document.getElementById("0");
const increaseOne = document.getElementById("1");
const increaseFive = document.getElementById("5");
const increaseTen = document.getElementById("10");
const increaseThirty = document.getElementById("30");
const increaseSixty = document.getElementById("60");
const submit = document.getElementById("submit");
let timer = document.querySelector(".timer");

function checkRange() {
  const current = parseInt(duration.innerText, 10);
  if (current > 1440) {
    duration.innerText = 1440;
  }
}

clear.onclick = () => {
  duration.innerText = 0;
};

increaseOne.onclick = () => {
  const current = parseInt(duration.innerText, 10);
  duration.innerText = current + 1;
  checkRange();
};

increaseFive.onclick = () => {
  const current = parseInt(duration.innerText, 10);
  duration.innerText = current + 5;
  checkRange();
};

increaseTen.onclick = () => {
  const current = parseInt(duration.innerText, 10);
  duration.innerText = current + 10;
  checkRange();
};

increaseThirty.onclick = () => {
  const current = parseInt(duration.innerText, 10);
  duration.innerText = current + 30;
  checkRange();
};

increaseSixty.onclick = () => {
  const current = parseInt(duration.innerText, 10);
  duration.innerText = current + 60;
  checkRange();
};

submit.onclick = () => {
  let state = submit.innerText;
  if (state === "start") {
    submit.innerText = "stop";
    timer.style.animationName = "duration";
    timer.style.animationDuration = duration.innerText * 60 + "s";
    timer.style.animationDelay = "0s";
    timer.style.animationPlayState = "running";
  } else {
    submit.innerText = "start";
    timer.style.animationPlayState = "paused";
  }
};
