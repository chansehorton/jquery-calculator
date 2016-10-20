'use strict';



$( document ).ready(function() {
  var buttons = $('.buttons');
  var calcScreen = $('#screen');

  buttons.on('click', function(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target;

      calcScreen.html(calcScreen.html() + clickedItem.innerText);
    };
  });
});
