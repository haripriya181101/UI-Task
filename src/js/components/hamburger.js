const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const closeSidebar = document.getElementById("closeSidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
  setTimeout(() => closeSidebar.focus(), 100);
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.focus();
});

// Close sidebar on Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
  }
});
