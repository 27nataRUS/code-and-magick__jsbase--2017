'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var RGB_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setupPopup = document.querySelector('.setup');
var setupBlock = document.querySelector('.setup-similar-list');
var similarWizards = document.querySelector('.setup-similar');
var template = document.querySelector('#similar-wizard-template').content;

var getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createWizard = function (names, surnames, rgb, colors) {
  return {
    name: getRandom(names) + ' ' + getRandom(surnames),
    coatColor: getRandom(rgb),
    eyesColor: getRandom(colors)
  };
};

var createElement = function (wizard) {
  var similarWizard = template.querySelector('.setup-similar-item').cloneNode(true);
  similarWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  similarWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  similarWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return similarWizard;
};

var renderSimilarWizards = function (number) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < number; i++) {
    fragment.appendChild(createElement(createWizard(NAMES, SURNAMES, RGB_COLORS, COLORS)));
  }
  setupBlock.appendChild(fragment);
};

setupPopup.classList.remove('hidden');
renderSimilarWizards(4);
similarWizards.classList.remove('hidden');


