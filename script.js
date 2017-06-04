$(document).ready(function() {

  $('.item.icon').on('click', function () {
    $('.ui.sidebar')
        .sidebar('setting', 'mobileTransition', 'scale down')
        .sidebar('setting', 'transition', 'scale down')
        .sidebar('toggle');
  });


});
