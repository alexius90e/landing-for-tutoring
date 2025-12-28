const maskOptions = {
  mask: '+{7} (000) 000-00-00',
};

const phoneInputs = document.querySelectorAll(`input[type="tel"]`);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));

const trainingSystemSwiper = document.querySelector('.training-system .swiper');

if (trainingSystemSwiper) {
  const swiper = new Swiper(trainingSystemSwiper, {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  });
}
