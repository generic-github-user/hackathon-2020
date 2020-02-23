firebase.firestore().collection('users').where('type', '==', 'student').get().then(
      function(students) {
            students.forEach(
                  function(student) {
                        for (var i = 0; i < 10; i++) {
                              student.ref.collection('vibes').add({
                                    time: new Date().getTime(),
                                    level: Math.round(Math.random() * 100)
                              })
                        }
                  }
            )
      }
)