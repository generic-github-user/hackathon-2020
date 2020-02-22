firebase.firestore().collection('users').where('type', '==', 'Student').get().then(function(data) {
      data.forEach(function(student) {
            console.log(student.data())
      })
});