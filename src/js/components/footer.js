document.addEventListener("DOMContentLoaded", function () {
  const footerTitles = document.querySelectorAll(".footer__title-wrap");
  const firstSection = document.querySelector(".footer__section");
  if (window.innerWidth <= 768 && firstSection) {
    firstSection.classList.add("active");
  }

  footerTitles.forEach(title => {
    title.addEventListener("click", function () {
      const clickedSection = title.closest(".footer__section");
      document.querySelectorAll(".footer__section").forEach(section => {
        if (section !== clickedSection) {
          section.classList.remove("active");
        }
      });
      clickedSection.classList.toggle("active");
    });
  });
});
