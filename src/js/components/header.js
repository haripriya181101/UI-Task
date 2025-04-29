const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.querySelector(".header"); 

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  header.classList.add("menu-open"); 

  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "inline";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  header.classList.remove("menu-open");  

  closeBtn.style.display = "none";
  hamburgerBtn.style.display = "inline";
});
