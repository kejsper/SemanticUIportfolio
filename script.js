$(document).ready(function() {

  $('.item.icon').on('click', function () {
    $('.ui.sidebar')
        .sidebar('setting', 'mobileTransition', 'scale down')
        .sidebar('setting', 'transition', 'scale down')
        .sidebar('toggle');
  });


  $('.ui.form').form({
    on: 'submit',
    fields: {
      firstname: {
        identifier: 'firstname',
        rules: [
          {
            type: 'empty',
            prompt: 'Please fill First Name input'
          }
        ]
      },
      lastname: {
        identifier: 'lastname',
        rules: [
          {
            type: 'empty',
            prompt: 'Please fill Last Name input'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type: 'email',
            prompt: 'Please enter valid email address'
          }
        ]
      },
      message: {
        identifier: 'message',
        rules: [
          {
            type: 'minLength[20]',
            prompt: 'Please enter minimum of 20 characters'
          }
        ]
      },
    }
  });

});
