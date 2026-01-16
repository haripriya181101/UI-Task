import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

function isSmallScreen() {
  return window.innerWidth <= 768;
}

let testimonialsSwiper;

function initTestimonialsSwiper() {
  return new Swiper(".testimonials-swiper", {
    modules: [Navigation, Autoplay],
    slidesPerView: isSmallScreen() ? 1 : 1.5,
    spaceBetween: 32,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 800,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".testimonials__nav--next",
      prevEl: ".testimonials__nav--prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.2,
      },
      1024: {
        slidesPerView: 1.5,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  testimonialsSwiper = initTestimonialsSwiper();
});
