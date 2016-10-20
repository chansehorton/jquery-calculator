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
    var nums = screenStr.split(/[+*/-]/g);
    var operators = screenStr.split(/\d+/g);
    var finalOperators = [];
    for (var i=0;i<operators.length;i++) {
      if (operators[i] !== "") {
        finalOperators.push(operators[i]);
      };
    };
    if (finalOperators.length<=1) {
      for (var j=0;j<nums.length;j++) {
        nums[j] = parseInt(nums[j]);
      };
      for (var k=0;k<finalOperators.length;k++) {
        switch(finalOperators[k]) {
          case '*':
          calcScreen.html(nums[0]*nums[1]);
          break;
          case '/':
          calcScreen.html(nums[0]/nums[1]);
          break;
          case '+':
          calcScreen.html(nums[0]+nums[1]);
          break;
          case '-':
          calcScreen.html(nums[0]-nums[1]);
          break;
          default:
          break;
        };
      };
    } else {
      calcScreen.html('Error');
    };
  };
};


$( document ).ready(function() {

  buttons.on('click', function(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target;
      var calcScrCurrent = calcScreen.html();

      if (calcScrCurrent !== 'Error') {
        switch(clickedItem.innerText) {
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
      } else if (clickedItem.innerText === 'C') {
        calcScreen.html('');
      };
    };
  });
});
