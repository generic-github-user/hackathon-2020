// Register new account on button press
$('button#register').click(function() {
      // Collect account information
      var email = $('input#email').val();
      var password = $('input#password').val();
      // Create account
      firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(result) {
                  window.location.replace('./index.html');
            }).catch(function(error) {
                  console.error(error);
            });

      // Reset input fields
      $('input#email').val('');
      $('input#password').val('');
      $('input#confirm-password').val('');
      $('input#zip').val('');
});
