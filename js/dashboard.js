function auth_change() {
      if (firebase.auth().currentUser == null) {
            window.location.href = './login.html';
      } else {
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(function(doc) {
                  if (doc.exists) {
                        if (doc.data().type == 'student' || doc.data().type == 'Student') {
                              $('a[href$="alerts"]').remove();
                              $('a[href$="students"]').remove();
                              $('a[href$="data"]').remove();
                        }
                  } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                  }
            }).catch(function(error) {
                  console.log("Error getting document:", error);
            });
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