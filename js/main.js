$('#submit-feeling-button').click(() => {
      var vibe = parseInt($('#mood-slider').val());
      // $('#vibe-container').css('visibility', 'hidden');
      $('#vibe-container').slideUp();

      firebase.firestore().collection("vibes").add({
                  student: firebase.auth().currentUser.uid,
                  time: new Date().getTime(),
                  level: vibe
            })
            .then(function(docRef) {
                  console.log("Document written with ID: ", docRef.id);
                  if (vibe >= 50) {
                        snackbar('Glad you feel well today!');
                  } else {
                        snackbar('Hope you feel better soon!');
                  }
            })
            .catch(function(error) {
                  console.error("Error adding document: ", error);
            });
})