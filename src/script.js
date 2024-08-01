"use strict";
// Hambarger btn
// $(document).ready(function () {
//   $(".hamburger").click(function () {
//     $(this).toggleClass("is-active");
//   });
// });
const menu = document.querySelector(".nav");
const menuList = document.querySelector(".nav_lists");

document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("visible");
  menuList.classList.toggle("background");
});
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
