// Variables for popup-map
let mapLink = document.querySelector('.map-popup-link');
let mapPopup = document.querySelector('.modal-map');
let mapClose = mapPopup.querySelector('.modal-close');

// Variables for popup-form
let formButton = document.querySelector('.write-us-btn');
let formPopup = document.querySelector('.write-us');
let formClose = formPopup.querySelector('.modal-close');
let formWrite = formPopup.querySelector('.form-write-us')
let nameField = formPopup.querySelector('[name=name]');
let emailField = formPopup.querySelector('[name=email]');
let textField = formPopup.querySelector('[name=text]');

// Variables for Promo-slider
let promoButtons = document.querySelector('.promo-slider-controls');
let promoButtonFirst = promoButtons.querySelector('.promo-slider-button-first');
let promoButtonSecond = promoButtons.querySelector('.promo-slider-button-second');
let promoButtonThird = promoButtons.querySelector('.promo-slider-button-third');
let promoSliders = document.querySelector('.promo-slider-list');
let promoSliderFirst = promoSliders.querySelector('.promo-slider-first');
let promoSliderSecond = promoSliders.querySelector('.promo-slider-second');
let promoSliderThird = promoSliders.querySelector('.promo-slider-third');

// Variables for Service-slider
let serviceButtons = document.querySelector('.services-slider-controls');
let serviceButtonFirst = serviceButtons.querySelector('.service-slider-button-first');
let serviceButtonSecond = serviceButtons.querySelector('.service-slider-button-second');
let serviceButtonThird = serviceButtons.querySelector('.service-slider-button-third');
let serviceSliders = document.querySelector('.services-slider-list');
let serviceSliderFirst = serviceSliders.querySelector('.service-slider-first');
let serviceSliderSecond = serviceSliders.querySelector('.service-slider-second');
let serviceSliderThird = serviceSliders.querySelector('.service-slider-third');

// Variables for localStorage
let isStorageSupport = true;
let storage = '';

// check localStorage
try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

// mapPopup
mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// formPopup
formButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.add('modal-show');

  if (storage) {
    nameField.value = storage;
    emailField.focus();
  } else {
    nameField.focus();
  }
});

formClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.remove('modal-show');
  formPopup.classList.remove('modal-error');
});

formWrite.addEventListener('submit', function (evt) {
  if (!nameField.value || !emailField.value || !textField.value) {
    evt.preventDefault();
    formPopup.classList.remove('modal-error');
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', nameField.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      formPopup.classList.remove("modal-show");
      formPopup.classList.remove('modal-error');
    }
  };
});

// Promo-slider
promoButtonFirst.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (promoButtonFirst.classList.contains("promo-slider-button-active")) {
  } else {
    promoButtonSecond.classList.remove('promo-slider-button-active');
    promoButtonThird.classList.remove('promo-slider-button-active');
    promoButtonFirst.classList.add('promo-slider-button-active');
  };

  if (promoSliderFirst.classList.contains('hide-slide')) {
    promoSliderFirst.classList.remove('hide-slide');
    promoSliderSecond.classList.add('hide-slide');
    promoSliderThird.classList.add('hide-slide');
  }
});


promoButtonSecond.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (promoButtonSecond.classList.contains("promo-slider-button-active")) {
  } else {
    promoButtonFirst.classList.remove('promo-slider-button-active');
    promoButtonThird.classList.remove('promo-slider-button-active');
    promoButtonSecond.classList.add('promo-slider-button-active');
  };

  if (promoSliderSecond.classList.contains('hide-slide')) {
    promoSliderSecond.classList.remove('hide-slide');
    promoSliderFirst.classList.add('hide-slide');
    promoSliderThird.classList.add('hide-slide');
  }
});


promoButtonThird.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (promoButtonThird.classList.contains("promo-slider-button-active")) {
  } else {
    promoButtonFirst.classList.remove('promo-slider-button-active');
    promoButtonSecond.classList.remove('promo-slider-button-active');
    promoButtonThird.classList.add('promo-slider-button-active');
  };

  if (promoSliderThird.classList.contains('hide-slide')) {
    promoSliderThird.classList.remove('hide-slide');
    promoSliderFirst.classList.add('hide-slide');
    promoSliderSecond.classList.add('hide-slide');
  }
});

// Service-slider
serviceButtonFirst.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (serviceButtonFirst.classList.contains("current-service-btn")) {
  } else {
    serviceButtonSecond.classList.remove('current-service-btn');
    serviceButtonThird.classList.remove('current-service-btn');
    serviceButtonFirst.classList.add('current-service-btn');
  };

  if (serviceSliderFirst.classList.contains('hide-slide')) {
    serviceSliderFirst.classList.remove('hide-slide');
    serviceSliderSecond.classList.add('hide-slide');
    serviceSliderThird.classList.add('hide-slide');
  }
});


serviceButtonSecond.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (serviceButtonSecond.classList.contains("current-service-btn")) {
  } else {
    serviceButtonFirst.classList.remove('current-service-btn');
    serviceButtonThird.classList.remove('current-service-btn');
    serviceButtonSecond.classList.add('current-service-btn');
  };

  if (serviceSliderSecond.classList.contains('hide-slide')) {
    serviceSliderSecond.classList.remove('hide-slide');
    serviceSliderFirst.classList.add('hide-slide');
    serviceSliderThird.classList.add('hide-slide');
  }
});


serviceButtonThird.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (serviceButtonThird.classList.contains("current-service-btn")) {
  } else {
    serviceButtonFirst.classList.remove('current-service-btn');
    serviceButtonSecond.classList.remove('current-service-btn');
    serviceButtonThird.classList.add('current-service-btn');
  };

  if (serviceSliderThird.classList.contains('hide-slide')) {
    serviceSliderThird.classList.remove('hide-slide');
    serviceSliderFirst.classList.add('hide-slide');
    serviceSliderSecond.classList.add('hide-slide');
  }
});
