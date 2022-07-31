import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

const mainSlider = new Swiper(".hero__content", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 600,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

const typesSlider = new Swiper(".types__content", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 600,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});
