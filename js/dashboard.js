function auth_change() {
      if (firebase.auth().currentUser == null) {
            window.location.href = './login.html';
      }

      var email = firebase.auth().currentUser.email;
      $('#currentuser-email').text(email);
}

function log_out() {
      firebase.auth().signOut();
      window.location.href = './login.html';
}
$('#logout-link').click(log_out);


db = firebase.firestore();
firebase.auth().onAuthStateChanged(auth_change);
window.setTimeout(auth_change, 10000);
