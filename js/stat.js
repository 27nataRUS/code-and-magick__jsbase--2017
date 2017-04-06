'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150;
  var columnWidth = 40;
  var columnIndent = 50;
  var columnPositionX = 0;
  var columnPositionY = 0;
  var initialX = 140;
  var initialY = 90;
  var step = histogramHeight / Math.max.apply(null, times);
  var playerColor = 'rgba(255, 0, 0, 1)';

  function drawText(text, positionX, positionY) {
    ctx.font = '16px PT Mono';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    ctx.fillStyle = 'black';
    ctx.fillText(text, positionX, positionY);
  }

  function drawColumn(coordinateX, coordinateY, columnHeight) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = playerColor;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(coordinateX, coordinateY, columnWidth, columnHeight);
  }

  function drawCloud() {
    ctx.fillStyle = 'white';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(100, 10, 420, 270);
  }

  function drawHistogram() {
    columnPositionX = initialX + i * (columnIndent + columnWidth);
    columnPositionY = initialY + (histogramHeight - times[i] * step);
    drawColumn(columnPositionX, columnPositionY, times[i] * step);
    drawText(names[i], columnPositionX, initialY + histogramHeight + 20);
    drawText(Math.round(times[i]), columnPositionX, columnPositionY - 10);
  }

  drawCloud();
  drawText('Ура, вы победили!', 120, 40);
  drawText('Список результатов:', 120, 60);
  for (var i = 0; i < names.length; i++) {
    drawHistogram();
  }
};
