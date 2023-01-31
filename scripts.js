const slides = document.querySelector(".slides");
const radioBtns = document.querySelectorAll(".radios > button");
const back = document.querySelector("#back");
const forward = document.querySelector("#forward");

let currentValue = 0;
let currentID = 0;

let timer = setInterval(next, 5000);

radioBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentID = btn.getAttribute("data-id");
    currentValue = 90 * currentID;
    slides.style.transform = `translateX(-${currentValue}vw)`;
    checkButtons(currentID);
    restartTimer();
  });
});

function checkButtons(id) {
  radioBtns.forEach((btn) => {
    if (btn.getAttribute("data-id") == id)
      btn.firstElementChild.innerHTML = "radio_button_checked";
    else btn.firstElementChild.innerHTML = "radio_button_unchecked";
  });
}

back.addEventListener("click", previous);

forward.addEventListener("click", next);

function next() {
  if (currentValue === 450) {
    currentValue = 0;
    currentID = 0;
  } else {
    currentValue += 90;
    currentID++;
  }
  slides.style.transform = `translateX(-${currentValue}vw)`;
  checkButtons(currentID);
  restartTimer();
}

function previous() {
  if (currentValue === 0) {
    currentValue = 450;
    currentID = 5;
  } else {
    currentValue -= 90;
    currentID--;
  }
  slides.style.transform = `translateX(-${currentValue}vw)`;
  checkButtons(currentID);
  restartTimer();
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(next, 5000);
}
