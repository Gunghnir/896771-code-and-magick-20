'use strict';

var userDialog = document.querySelector('.setup');
document.querySelector('.setup-similar').classList.remove('hidden');

//  module4-task1

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var setupWizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
// var coatColorField = userDialog.querySelector('[name=coat-color]');
var setupWizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
// var eyesColorField = userDialog.querySelector('[name=eyes-color]');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var fireballColorField = userDialog.querySelector('[name=fireball-color]');

//  Закрыть, если нажата ESC И фокус не стоит на userName
var onEscPopup = function (evt) {
  if (evt.key === 'Escape' && !userName.matches(':focus')) {
    evt.preventDefault();
    closePopup();
  }
};

//  Открытие и закрытие попапа по клику ил нажатию на enter и esc
var openPopup = function () {
  userDialog.classList.remove('hidden');
  window.addEventListener('keydown', onEscPopup);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  window.removeEventListener('keydown', onEscPopup);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// генерируем случайный цвет робы, глаз, фаерболла мага

var getCoatColor = function () {
  var randomCoatColor = getRandomElement(WIZARD.COAT_COLOR);

  setupWizardCoat.style.fill = randomCoatColor;
};

var getEyesColor = function () {
  var randomEyesColor = getRandomElement(WIZARD.EYES_COLOR);

  setupWizardEyes.style.fill = randomEyesColor;
  // eyesColorField.value = randomEyesColor;
};

var getFireballColor = function () {
  var randomFireballColor = getRandomElement(WIZARD.FIREBALL_COLOR);

  // fireballColorField.style.fill = randomFireballColor;
  fireballColorField.value = randomFireballColor;
};

// Красим элементы волшебника по клику

setupWizardCoat.addEventListener('click', function () {
  setupWizardCoat.style.fill = getCoatColor();
});

setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = getEyesColor();
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.backgroundColor = getFireballColor();
});


// Объявляем свойства волшебников
var WIZARD = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};
var WIZARD_COUNT = 4;


// Находим элемент (по имени класса), в который будем записывать клонированных волшебников, и шаблон волшебника по ID.
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


renderWizard();

// Клонируем шаблон, записываем клон в переменную wizardElement, которую затем приписываем в similarListElement

function renderWizard() {

  for (var i = 0; i < WIZARD_COUNT; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    var fragment = document.createDocumentFragment();

    fragment.appendChild(wizardElement);
    wizardElement.querySelector('.setup-similar-label').textContent = getRandomElement(WIZARD.NAMES) + '\n ' + getRandomElement(WIZARD.SURNAMES);
    wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(WIZARD.COAT_COLOR);
    wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(WIZARD.EYES_COLOR);

    similarListElement.appendChild(fragment);
  }

}
// Функция, возвращающая случайный элемемент массива
function getRandomElement(array) {
  for (var i = 0; i < array.length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
  }
  return randomElement;
}

