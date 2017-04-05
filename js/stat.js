'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150;
  var columnWidth = 40;
  var columnIndent = 50;
  var initialX = 140;
  var initialY = 90;
  var step = histogramHeight / Math.max.apply(null, times);
  var playerColor = 'rgba(255, 0, 0, 1)';

  ctx.fillStyle = 'white';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var i = 0; i < names.length; i++) {
    var columnPositionX = initialX + i * (columnIndent + columnWidth);
    var columnPositionY = initialY + (histogramHeight - times[i] * step);
    if (names[i] === 'Вы') {
      ctx.fillStyle = playerColor;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(columnPositionX, columnPositionY, columnWidth, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], columnPositionX, initialY + histogramHeight + 20);
    ctx.fillText(Math.round(times[i]), columnPositionX, columnPositionY - 10);
  }
};
