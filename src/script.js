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
// const mapContainer = document.getElementById("Location");
// const mapEl = document.getElementById("map");
// function mapLoader() {
//   const map = L.map("map").setView([51.505, -0.09], 13);

//   return L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   //   L.marker([51.5, -0.09])
//   //     .addTo(map)
//   //     .bindPopup("A pretty CSS popup.<br> Easily customizable.")
//   //     .openPopup();
// }
// mapContainer.insertAdjacentHTML("beforebegin", mapLoader);
