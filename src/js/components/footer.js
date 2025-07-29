document.addEventListener("DOMContentLoaded", function () {
  const footerTitles = document.querySelectorAll(".footer__title-wrap");
  const sections = document.querySelectorAll(".footer__section");
  const firstSection = sections[0];

  if (window.innerWidth <= 768 && firstSection) {
    firstSection.classList.add("active");
  }

  footerTitles.forEach((title) => {
    const section = title.closest(".footer__section");

    if (section !== firstSection) {
      title.addEventListener("click", function () {
        section.classList.toggle("active");
      });
    }
  });
});
