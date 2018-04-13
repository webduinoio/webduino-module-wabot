+(function (window, webduino) {

  'use strict';

  window.getwabots = function (board) {
    return new webduino.module.wabots(board);
  };

}(window, window.webduino));
