const maskOptions = {
  mask: '+{7} (000) 000-00-00',
};

const phoneInputs = document.querySelectorAll(`input[type="tel"]`);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));
