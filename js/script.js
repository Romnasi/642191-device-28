let mapLink = document.querySelector('.map-popup-link');
let mapPopup = document.querySelector('.modal-map');
let mapClose = mapPopup.querySelector('.modal-close');

let formButton = document.querySelector('.write-us-btn');
let formPopup = document.querySelector('.write-us');
let formClose = formPopup.querySelector('.modal-close');
let formWrite = formPopup.querySelector('.form-write-us')
let nameField = formPopup.querySelector('[name=name]');
let emailField = formPopup.querySelector('[name=email]');
let textField = formPopup.querySelector('[name=text]');

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
  }
});
