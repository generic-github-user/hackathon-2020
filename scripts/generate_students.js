for (var i = 0; i < 20; i++) {
      firebase.firestore().collection('users').add({
            name: random_names[Math.floor(Math.random() * random_names.length)],
            email: 'n/a',
            zip: Math.round(Math.random() * 90000) + 10000,
            school: schools_list[Math.floor(Math.random() * schools_list.length)],
            type: 'student',
            grade: Math.floor(Math.random() * 4) + 9
      });
}