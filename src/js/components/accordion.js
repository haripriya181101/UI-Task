document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".faq__header");

  accordionHeaders.forEach((header, index) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const body = item.querySelector(".faq__body");
      const isActive = item.classList.contains("active");
      
      document.querySelectorAll(".faq__item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq__body").style.maxHeight = null;
          otherItem.querySelector(".faq__header").setAttribute("aria-expanded", "false");
        }
      });

      if (isActive) {
        item.classList.remove("active");
        body.style.maxHeight = null;
        header.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
        header.setAttribute("aria-expanded", "true");
      }
    });

    header.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = accordionHeaders[index + 1] || accordionHeaders[0];
        next.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = accordionHeaders[index - 1] || accordionHeaders[accordionHeaders.length - 1];
        prev.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        accordionHeaders[0].focus();
      } else if (e.key === "End") {
        e.preventDefault();
        accordionHeaders[accordionHeaders.length - 1].focus();
      }
    });
  });
});
