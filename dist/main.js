// header fixed
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("backdrop-blur-lg", "border-b-[1px]");
  } else {
    header.classList.remove("backdrop-blur-lg", "border-b-[1px]");
  }
});

// navigation
const menuBtn = document.getElementById("menu-btn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("bx-menu")) {
    menuBtn.classList.replace("bx-menu", "bx-x");
    navigation.classList.remove("hidden");
  } else if (menuBtn.classList.contains("bx-x")) {
    menuBtn.classList.replace("bx-x", "bx-menu");
    navigation.classList.add("hidden");
  }
});

// typed.js
const Typed = require("typed.js");

const typed = new Typed("#title", {
  strings: ["Fullstack Engineer"],
  typeSpeed: 30,
  loop: true,
});
