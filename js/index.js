const maskOptions = {
  mask: '+{7} (000) 000-00-00',
};

const phoneInputs = document.querySelectorAll(`input[type="tel"]`);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));

const trainingSystemSwiper = document.querySelector('.training-system .swiper');
const trainingSystemPagination = document.querySelector('.training-system__cards-pagination');

if (trainingSystemSwiper && trainingSystemPagination) {
  const swiper = new Swiper(trainingSystemSwiper, {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    allowTouchMove: false,
    breakpoints: {
      320: {
        allowTouchMove: false,
      },
      769: {
        allowTouchMove: true,
      },
    },
    pagination: {
      el: trainingSystemPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
}

const reviewsSwiper = document.querySelector('.reviews .swiper');
const reviewsPagination = document.querySelector('.reviews__cards-pagination');
const reviewsPrev = document.querySelector('.reviews__cards-prev');
const reviewsNext = document.querySelector('.reviews__cards-next');

if (reviewsSwiper) {
  const swiper = new Swiper(reviewsSwiper, {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      769: {
        slidesPerView: 2,
      },

      1025: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: trainingSystemPagination,
    },
  });
}
