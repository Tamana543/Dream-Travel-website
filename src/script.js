"use strict";

const menu = document.querySelector(".nav");
const menuList = document.querySelector(".nav_lists");
const slideEl = document.querySelectorAll(".slide");
const sliderEl = document.querySelector(".slider");
const slideLiftBtn = document.querySelector(".slider__btn--left");
const slideRightBtn = document.querySelector(".slider__btn--right");
const allSections = document.querySelectorAll("section");

// Hambarger btn
document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("visible");
  menuList.classList.toggle("background");
});

// SLIDER
let curentSlide = 0;
const maxSlide = slideEl.length;
function goToSlide(slide) {
  slideEl.forEach(
    (s, el) => (s.style.transform = `translateX(${200 * (el - slide)}%)`)
  );
}
function nextSlide() {
  curentSlide === maxSlide - 1 ? (curentSlide = 0) : curentSlide++;
  goToSlide(curentSlide);
}
function preSlide() {
  if (curentSlide === 0) {
    curentSlide = maxSlide - 1;
  } else {
    curentSlide--;
  }
  goToSlide(curentSlide);
}
function init() {
  goToSlide(0);
}
init();
slideLiftBtn.addEventListener("click", preSlide);
slideRightBtn.addEventListener("click", nextSlide);
document.addEventListener("keydown", function (event) {
  event.key === "ArrowRight" && nextSlide();
  event.key === "ArrowLeft" && preSlide();
});

//Section Animations
function secObserverEn(entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observe.unobserve(entry.target);
}
const sectionObserve = new IntersectionObserver(secObserverEn, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (sec) {
  sectionObserve.observe(sec);
  sec.classList.add("section--hidden");
});
// map API
const mapContainer = document.getElementById("Location");
const mapEl = document.getElementById("map");
const subPart = document.querySelector(".sub_part");
function mapEn() {
  subPart.style.display = "none";
  const map = L.map("map").setView([37.83333, -119.499998], 10);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  L.marker([37.83333, -119.499998])
    .addTo(map)
    .bindPopup("Find us here .")
    .openPopup();
}

function setTimer(time) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      subPart.style.display = "block";
      map.style.display = "none";
    }, time * 1000);
  });
}
async function initMap() {
  try {
    await Promise.race([mapEn(), setTimer(10)]);
  } catch (err) {
    console.log(err);
  }
}
initMap();
