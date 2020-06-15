'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 90;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TIME_X = 50;
var BAR_START_Y = 80;

// Создаем Облако
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Ищем максимальное значение
var getMaxElement = function getMaxValue(array) {
  var max = -1;
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value > max) {
      max = value;
    }
  }
  return max;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Наносим надписи
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 2 * CLOUD_X, 3 * GAP);
  ctx.fillText('Список результатов:', 2 * CLOUD_X, 5 * GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(players[i], CLOUD_X / 2 + (i + 1) * BAR_GAP, CLOUD_Y + 1.5 * BAR_HEIGHT + 2 * GAP);

    var stepSize = BAR_HEIGHT * times[i] / maxTime;
    ctx.fillStyle = fillBarColor(players[i]);
    ctx.fillRect(CLOUD_X / 2 + BAR_GAP * (i + 1), CLOUD_Y + BAR_START_Y + BAR_HEIGHT - stepSize, BAR_WIDTH, stepSize);
    ctx.fillText(times[i].toFixed(0), TIME_X + (i + 1) * BAR_GAP, BAR_START_Y + BAR_HEIGHT - stepSize);
  }

  // Вычисляем цвет бара в зависимости от имени игрока
  function fillBarColor(namePlayer) {
    var randomTransparency = Math.random().toFixed(2);
    if (namePlayer === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 26, 255, ' + randomTransparency + ')';
    }
  }
};
