'use strict';

var drawCloud = function (ctx, positionX, positionY, cloudWidth, cloudHeight) {
  ctx.fillStyle = 'white';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(positionX, positionY, cloudWidth, cloudHeight);
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
};

var drawText = function (ctx, text, positionX, positionY) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText(text, positionX, positionY);
};

var drawColumn = function (ctx, positionX, positionY, columnWidth, columnHeight, nickname) {
  ctx.fillStyle = nickname === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random().toFixed(1) + ')';
  ctx.fillRect(positionX, positionY, columnWidth, columnHeight);
};

var drawHistogram = function (ctx, names, times) {
  var histogramHeight = 150;
  var step = histogramHeight / Math.max.apply(null, times);
  var columnPositionX = 0;
  var columnPositionY = 0;
  var initialX = 140;
  var initialY = 90;
  var columnWidth = 40;
  var columnIndent = 50;

  for (var i = 0; i < names.length; i++) {
    columnPositionX = initialX + i * (columnIndent + columnWidth);
    columnPositionY = initialY + (histogramHeight - times[i] * step);
    drawColumn(ctx, columnPositionX, columnPositionY, columnWidth, times[i] * step, names[i]);
    drawText(ctx, names[i], columnPositionX, initialY + histogramHeight + 20);
    drawText(ctx, Math.round(times[i]), columnPositionX, columnPositionY - 10);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, 100, 10, 420, 270);
  drawText(ctx, 'Ура, вы победили!', 120, 40);
  drawText(ctx, 'Список результатов:', 120, 60);
  drawHistogram(ctx, names, times);
};
