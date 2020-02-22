$('#submit-report-button').click(() => {
  firebase.firestore().collection("reports").add({
      type: $('#report-type-dropdown').val(),
      content: $('#report-textarea').val()
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", "REDACTED");
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
});
