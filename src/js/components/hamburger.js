const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header");

hamburger.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});
