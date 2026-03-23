const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const closeSidebar = document.getElementById("closeSidebar");

// Get all focusable elements inside the sidebar
const getFocusableElements = (container) => {
  return container.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="email"], input[type="number"], input[type="submit"], select, [tabindex]:not([tabindex="-1"])'
  );
};

hamburger.addEventListener("click", () => {
  sidebar.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden"; // Lock scroll
  
  const focusable = getFocusableElements(sidebar);
  if (focusable.length > 0) {
    setTimeout(() => focusable[0].focus(), 100);
  }
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = ""; // Unlock scroll
  hamburger.focus();
});

// Focus trap and Esc key
document.addEventListener("keydown", (e) => {
  if (!sidebar.classList.contains("open")) return;

  if (e.key === "Escape") {
    sidebar.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    hamburger.focus();
  }

  if (e.key === "Tab") {
    const focusable = getFocusableElements(sidebar);
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  }
});
