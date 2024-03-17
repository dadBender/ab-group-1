

const swiper = new Swiper(".card__swiper", {
  navigation: {
    nextEl: '.reviews__button_next',
    prevEl: '.reviews__button_prev'
  },
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 1500,
  touchRatio: 1,
  breakpoints: {
    951: {
      spaceBetween: 20,
    }
  }
})