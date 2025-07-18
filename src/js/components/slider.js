import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function isSmallScreen() {
  return window.innerWidth <= 768;
}

let bannerSwiper;

function initBannerSwiper() {
  return new Swiper(".banner__swiper", {
    modules: [Pagination, Autoplay, Navigation],
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banner__swiper .swiper-pagination",
      clickable: true,
      type: isSmallScreen() ? "progressbar" : "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bannerSwiper = initBannerSwiper();

  window.addEventListener("resize", () => {
    const expectedType = isSmallScreen() ? "progressbar" : "bullets";
    if (bannerSwiper.params.pagination.type !== expectedType) {
      bannerSwiper.destroy(true, true);
      bannerSwiper = initBannerSwiper();
    }
  });

  const brandSwiper = new Swiper(".brand-swiper", {
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

  new Swiper(".offers-swiper", {
    modules: [Autoplay],
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 36,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  const swiperEl = document.querySelector(".brand-swiper");
  swiperEl.addEventListener("mouseenter", () => brandSwiper.autoplay.stop());
  swiperEl.addEventListener("mouseleave", () => brandSwiper.autoplay.start());
});
