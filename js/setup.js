'use strict';

// Показываем окно с выбором волшебников
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');


// Объявляем свойства волшебников
var WIZARD = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
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
