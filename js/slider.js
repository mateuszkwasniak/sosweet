const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".btn-slider--right");
const btnLeft = document.querySelector(".btn-slider--left");

const dots = document.querySelectorAll(".dot");

let filledDot = dots[0];
let currentSlide = 0;

const goToSlide = function (slide) {
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`)
  );
};

const fillDot = function () {
  filledDot.classList.remove("dot--fill");

  filledDot = dots[currentSlide];
  filledDot.classList.add("dot--fill");
};

const goRight = function () {
  if (currentSlide === 3) {
    currentSlide = 0;
    goToSlide(currentSlide);
  } else {
    currentSlide++;
    goToSlide(currentSlide);
  }
  fillDot();
};

const goLeft = function () {
  if (currentSlide === 0) {
    currentSlide = 3;
    goToSlide(currentSlide);
  } else {
    currentSlide--;
    goToSlide(currentSlide);
  }
  fillDot();
};

// SWIPE

let touchstartX = 0;
let touchendX = 0;

const slider = document.querySelector(".slider");

function handleGesture() {
  if (touchendX < touchstartX) goRight();
  if (touchendX > touchstartX) goLeft();
}

slider.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});

btnRight.addEventListener("click", goRight);
btnLeft.addEventListener("click", goLeft);

goToSlide(0);
