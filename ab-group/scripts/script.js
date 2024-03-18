 
const swiper = new Swiper(".card__swiper", {
  // navigation: {
  //   nextEl: '.reviews__button_next',
  //   prevEl: '.reviews__button_prev'
  // },
  // loop: true,
  centeredSlides: true,
  spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerGroup: 1,
    breakpoints: {
      1506: {
        // slidesPerView: 1,
      }
    }
  }
)