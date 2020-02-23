// Register new account on button press
$('button#register').click(function() {
      // Collect account information
      var email_address = $('input#email').val();
      var password = $('input#password').val();
      // Create account
      firebase.auth().createUserWithEmailAndPassword(email_address, password)
            .then(function(result) {
                  var userId = firebase.auth().currentUser.uid
                  var user_type = $('input#user-type-dropdown').val();
                  if (user_type == undefined) {
                        user_type = 'Student';
                  }
                  firebase.firestore().collection('users').doc(userId).set({
                        name: $('input#name').val(),
                        email: email_address,
                        zip: $('input#zip').val(),
                        school: $('input#school').val(),
                        type: user_type
                  }).then(() => {
                        window.location.replace('./dashboard.html');
                  });
            }).catch(function(error) {
                  console.error(error);
            });

      // Reset input fields
      $('input#email').val('');
      $('input#password').val('');
      $('input#confirm-password').val('');
      $('input#zip').val('');
});