document.addEventListener("DOMContentLoaded", function () {
  const footerTitles = document.querySelectorAll(".footer__title-wrap");
  const sections = document.querySelectorAll(".footer__section");

  if (window.innerWidth <= 768 && sections.length > 0) {
    sections.forEach((s, i) => {
      if (i === 0 || i === sections.length - 1) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
      const dropdown = s.querySelector(".footer__responsive-dropdown");
      if (dropdown) {
        dropdown.style.display =
          i === 0 || i === sections.length - 1 ? "none" : "";
      }
    });

    footerTitles.forEach((title) => {
      title.addEventListener("click", function () {
        const currentSection = title.closest(".footer__section");

        sections.forEach((section) => {
          const dropdown = section.querySelector(
            ".footer__responsive-dropdown"
          );

          if (
            section !== currentSection &&
            section !== sections[0] &&
            section !== sections[sections.length - 1]
          ) {
            section.classList.remove("active");
            if (dropdown) dropdown.style.display = "";
          }
        });

        currentSection.classList.toggle("active");

        const dropdown = currentSection.querySelector(
          ".footer__responsive-dropdown"
        );
        if (dropdown) {
          dropdown.style.display = currentSection.classList.contains("active")
            ? "none"
            : "";
        }
      });
    });
  }
});
