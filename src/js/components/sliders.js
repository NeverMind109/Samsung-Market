import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

const mainSlider = new Swiper(".hero__content", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 3000,
  },
});

const typesSlider = new Swiper(".types__content", {
  slidesPerView: 5,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 600,
});
