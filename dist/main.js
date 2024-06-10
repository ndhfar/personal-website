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
