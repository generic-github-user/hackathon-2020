firebase.firestore().collection('users').where('type', '==', 'student').get().then(
      function(students) {
            students.forEach(
                  function(student) {
                        student.ref.update({
                              average_score: Math.round(Math.random() * 100)
                        })
                  }
            )
      }
)