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
    pagination: {
      el: trainingSystemPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
}
