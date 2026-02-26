document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".faq__header");

  accordionHeaders.forEach((header) => {
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
  });
});
