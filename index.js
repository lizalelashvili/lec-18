function setIntervals() {
  const newDate = new Date();
  let hour = newDate.getHours();
  let minut = newDate.getMinutes();
  let second = newDate.getSeconds();

  if (hour > 9) {
    document.querySelector(".timetbilisi").innerHTML =
      hour + ":" + minut + ":" + second + " PM";
  } else {
    document.querySelector(".timetbilisi").innerHTML =
      "0" + "" + hour + ":" + minut + ":" + second + " PM";
  }
}
setInterval(setIntervals, 1000);

// SLIDER

const slides = document.querySelectorAll(".slide");
const leftArr = document.querySelector(".left");
const rightArr = document.querySelector(".right");

const slidewrapc = document.querySelector(".slides-wrapper");

const dotsc = document.querySelectorAll(".slider-btns ul li");

let activeSlideIndex = 0;

function renderSlides() {
  slides.forEach((slide, index) => {
    if (activeSlideIndex === index) {
      slide.classList.add("active-slide");
    } else {
      slide.classList.remove("active-slide");
    }
  });
}

function nextSlide() {
  if (activeSlideIndex === slides.length - 1) {
    activeSlideIndex = 0;
  } else {
    activeSlideIndex++;
  }

  renderSlides();
}

function prevSlide() {
  if (activeSlideIndex === 0) {
    activeSlideIndex = slides.length - 1;
  } else {
    activeSlideIndex--;
  }
  renderSlides();
}

function dots() {
  for (var i = 1; i <= slides.length; i++) {
    document.querySelector(".slider-btns ul").innerHTML += "<li></li>";
  }
}

function createSlider() {
  renderSlides();

  rightArr.addEventListener("click", nextSlide);
  leftArr.addEventListener("click", prevSlide);

  // setInterval(nextSlide, 6000);
  document.addEventListener("keyup", (e) => {
    // console.log(e.code);
    if (e.code === "ArrowRight") {
      nextSlide();
    }
    if (e.code === "ArrowLeft") {
      prevSlide();
    }
  });

  setInterval(function () {
    nextSlide();
  }, 5000);

  dots();
}

createSlider();

// CountDown

var deadline = new Date("2023-03-21 20:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("countdown-span").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  if (t < 0) {
    clearInterval(x);
  }
}, 1000);
