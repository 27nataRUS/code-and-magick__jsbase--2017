'use strict';

window.renderStatistics = function (ctx, names, times) {

  function drawCloud(placeForCloud, cloudX, cloudY, cloudWidth, cloudHeight) {
    placeForCloud.fillStyle = 'white';
    placeForCloud.shadowOffsetX = 10;
    placeForCloud.shadowOffsetY = 10;
    placeForCloud.shadowColor = 'rgba(0, 0, 0, 0.7)';
    placeForCloud.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);
    placeForCloud.shadowOffsetX = 0;
    placeForCloud.shadowOffsetY = 0;
    placeForCloud.shadowColor = 'rgba(0, 0, 0, 0)';
  }

  function drawText(placeForText, text, positionX, positionY) {
    placeForText.font = '16px PT Mono';
    placeForText.fillStyle = 'black';
    placeForText.fillText(text, positionX, positionY);
  }

  function drawColumn(placeForColumn, coordinateX, coordinateY, barWidth, barHeight, nickname) {
    if (nickname === 'Вы') {
      placeForColumn.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      placeForColumn.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    placeForColumn.fillRect(coordinateX, coordinateY, barWidth, barHeight);
  }

  function drawHistogram(placeForHistogram, playerNames, playerTimes) {
    var histogramHeight = 150;
    var step = histogramHeight / Math.max.apply(null, times);
    var columnPositionX = 0;
    var columnPositionY = 0;
    var initialX = 140;
    var initialY = 90;
    var columnWidth = 40;
    var columnIndent = 50;
    for (var i = 0; i < names.length; i++) {
      var playerName = playerNames[i];
      columnPositionX = initialX + i * (columnIndent + columnWidth);
      columnPositionY = initialY + (histogramHeight - times[i] * step);
      drawColumn(placeForHistogram, columnPositionX, columnPositionY, columnWidth, playerTimes[i] * step, playerName);
      drawText(placeForHistogram, playerNames[i], columnPositionX, initialY + histogramHeight + 20);
      drawText(placeForHistogram, Math.round(playerTimes[i]), columnPositionX, columnPositionY - 10);
    }
  }

  drawCloud(ctx, 100, 10, 420, 270);
  drawText(ctx, 'Ура, вы победили!', 120, 40);
  drawText(ctx, 'Список результатов:', 120, 60);
  drawHistogram(ctx, names, times);
};
