import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial__right",
      prevEl: ".testimonial__left",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1.2 },
      1024: { slidesPerView: 1.5 },
    },
  });
}

function addTestimonialHoverStop(swiper) {
  document.querySelectorAll(".testimonial-card").forEach((card) => {
    card.addEventListener("mouseenter", () => swiper.autoplay.stop());
    card.addEventListener("mouseleave", () => swiper.autoplay.start());
  });
}

function initTestimonialNavActive() {
  const leftBtn = document.querySelector(".testimonial__left");
  const rightBtn = document.querySelector(".testimonial__right");
  leftBtn.classList.add("is-active");

  leftBtn.addEventListener("click", () => {
    leftBtn.classList.add("is-active");
    rightBtn.classList.remove("is-active");
  });

  rightBtn.addEventListener("click", () => {
    rightBtn.classList.add("is-active");
    leftBtn.classList.remove("is-active");
  });
}

let partnersSwiper;

function initPartnersSwiper() {
  return new Swiper(".partners-swiper", {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 64,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: {
        slidesPerView: 5,
        spaceBetween: 64,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  testimonialsSwiper = initTestimonialsSwiper();
  addTestimonialHoverStop(testimonialsSwiper);
  initTestimonialNavActive();

  partnersSwiper = initPartnersSwiper();

  document
    .querySelector(".partners-swiper")
    .addEventListener("mouseenter", () => partnersSwiper.autoplay.stop());

  document
    .querySelector(".partners-swiper")
    .addEventListener("mouseleave", () => partnersSwiper.autoplay.start());
});
