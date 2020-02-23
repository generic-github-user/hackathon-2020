function show(element) {
      element.addClass('mdl-navigation__link');
      element.css('visibility', 'visible');
}

function hide(element) {
      element.removeClass('mdl-navigation__link');
      element.css('visibility', 'hidden');
}

$('nav.mdl-navigation>a').removeClass('mdl-navigation__link');
$('nav.mdl-navigation>a').hide();

function auth_change() {
      if (firebase.auth().currentUser == null) {
            window.location.href = './login.html';
      } else {
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(function(doc) {
                  show($('a[href$="main"]'));
                  show($('a[href$="report"]'));
                  show($('a[href$="talk"]'));
                  show($('a[href$="account"]'));
                  if (doc.exists) {
                        if (doc.data().type != 'student' && doc.data().type != 'Student') {
                              show($('a[href$="alerts"]'));
                              show($('a[href$="students"]'));
                              show($('a[href$="data"]'));
                        }
                        // $.getScript('https://code.getmdl.io/1.3.0/material.min.js');
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