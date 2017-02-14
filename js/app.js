var main = function () {
    $('.btn').click(function () {
      var post = $('.status-box').val();
      $('<li>').text(post).prependTo('.posts');
      $('.status-box').val('');
      $('.btn').addClass('disabled');
    });
    
    $('.btn').addClass('disabled');
    
    $('.status-box').keyup(function () {
      var postLength = $(this).val().length;
        
      if (postLength === 0) {
        $('.btn').addClass('disabled');
      } else {
        $('.btn').removeClass('disabled');
      }
    });
  };


$(document).ready(main);