'use strict';

var buttons = $('.buttons');
var calcScreen = $('#screen');

$.fn.noDblOps = function(screenStr, str) {
  if ($.isNumeric(screenStr[(screenStr.length)-1])) {
    calcScreen.html(screenStr + str);
  } else {
    calcScreen.html(screenStr.slice(0,screenStr.length-1) + str);
  };
};

$.fn.calculate = function(screenStr) {
  if (screenStr.includes('/0')) {
    calcScreen.html('Error');
  } else if ($.isNumeric(screenStr[(screenStr.length)-1])!==true) {
    calcScreen.html('Error');
  } else {
    calcScreen.html(eval(screenStr));
  };
};


$( document ).ready(function() {

  buttons.on('click', function(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target;
      var calcScrCurrent = calcScreen.html();

      switch(clickedItem.innerText) {
        case 'Error':
          break;
        case 'C':
          calcScreen.html('');
          break;
        case '=':
          $.fn.calculate(calcScrCurrent);
          break;
        case 'x':
          $.fn.noDblOps(calcScrCurrent, '*');
          break;
        case '÷':
          $.fn.noDblOps(calcScrCurrent, '/');
          break;
        case '+':
          $.fn.noDblOps(calcScrCurrent, '+');
          break;
        case '-':
          $.fn.noDblOps(calcScrCurrent, '-');
          break;
        default:
          calcScreen.html(calcScrCurrent + clickedItem.innerText);
          break;
      };
    };
  });
});
