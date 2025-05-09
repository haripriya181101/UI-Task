import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
  // Banner Swiper
  new Swiper(".banner-swiper", {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banner-swiper .swiper-pagination",
      clickable: true,
    },
  });

  const swiper = new Swiper(".brand-swiper", {
    modules: [Autoplay],
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  const offersSwiper = new Swiper(".offers-swiper", {
    modules: [Autoplay],
    loop: true,
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 36,
    speed: 1000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  const swiperEl = document.querySelector(".brand-swiper");
  swiperEl.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });
  swiperEl.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});
