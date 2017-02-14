var main = function () {
    $('.done').click(function () {
      $('<div>').appendTo('#wrapper-all').addClass('show');
      
    });
  };
$(document).ready(main);