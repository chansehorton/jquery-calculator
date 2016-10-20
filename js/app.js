'use strict';



$( document ).ready(function() {
  var buttons = $('.buttons');
  var calcScreen = $('#screen');

  buttons.on('click', function(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target;
      switch(clickedItem.innerText) {
        case 'C':
          calcScreen.html('');
          break;
        case '=':
          calcScreen.html(eval(calcScreen.html()));
          break;
        default:
          calcScreen.html(calcScreen.html() + clickedItem.innerText);
          break;
      };
    };
  });
});
