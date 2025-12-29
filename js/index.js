const maskOptions = {
  mask: '+{7} (000) 000-00-00',
};

const phoneInputs = document.querySelectorAll(`input[type="tel"]`);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));

const header = document.querySelector('.header');

if (header) {
  header.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isBurger = event.target.classList.contains('header__burger-button');
    const isConsult = event.target.classList.contains('header__consult-button');
    const isLink = event.target.classList.contains('header__nav-link');

    console.log(isConsult);

    if (isBurger) {
      event.currentTarget.classList.toggle('active');
    }

    if (isLayout || isConsult || isLink) {
      event.currentTarget.classList.remove('active');
    }
  });
}

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
const reviewsPagination = document.querySelector('.reviews__slider-controls-pagination');
const reviewsPrev = document.querySelector('.reviews__slider-controls-buttons-prev');
const reviewsNext = document.querySelector('.reviews__slider-controls-buttons-next');

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
    navigation: {
      nextEl: reviewsNext,
      prevEl: reviewsPrev,
    },
    pagination: {
      el: reviewsPagination,
    },
  });
}

const faqItems = document.querySelectorAll('.faq__card');

faqItems.forEach((faqItem) => {
  updateFaqItem(faqItem);

  faqItem.addEventListener('click', (event) => {
    const isActive = event.currentTarget.classList.contains('active');
    const isToggler = event.target.classList.contains('faq__card-toggler');

    if (isToggler) {
      const panel = event.target.nextElementSibling;
      if (isActive) {
        panel.style.maxHeight = null;
        event.currentTarget.classList.remove('active');
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        event.currentTarget.classList.add('active');
      }
    }
  });
});

function updateFaqItem(faqItem) {
  if (!faqItem) return;

  const isActive = faqItem.classList.contains('active');
  const panel = faqItem.querySelector('.faq__card-panel');

  if (!panel) return;

  if (isActive) {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  } else {
    panel.style.maxHeight = null;
  }
}

const modal = document.querySelector('.modal');

if (modal) modal.addEventListener('click', handleModalClick);

const consultButtons = document.querySelectorAll('.consult-button');

consultButtons.forEach((consultButton) => consultButton.addEventListener('click', openModal));

function openModal() {
  if (!modal) return;
  modal.classList.add('active');
}

function closenModal() {
  if (!modal) return;
  modal.classList.remove('active');
}

function handleModalClick(event) {
  const isClose = event.target.classList.contains('modal__close');
  const isReset = event.target.classList.contains('modal__form-item-control-reset');
  const isLayout = event.target === event.currentTarget;

  if (isClose || isLayout) closenModal();

  if (isReset) {
    const wrapper = event.target.closest('.modal__form-item-control');
    const input = wrapper.querySelector('.modal__form-item-control-input');
    if (input) input.value = '';
  }
}

const modalForm = document.querySelector('.modal__form');

if (modalForm) {
  modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitter = event.submitter;
    if (submitter.classList.contains('modal__form-submit-button')) {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      fetch('mail.php', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 'success') {
            console.log('✅ Заявка отправлена!');
            form.reset();
            closenModal();
          } else {
            console.error('❌ Ошибка: ' + result.message);
          }
        })
        .catch((error) => {
          console.error('❌ Ошибка сети: ' + error);
        });
    }
  });
}
