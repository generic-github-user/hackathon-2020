firebase.firestore().collection('users').where('type', '==', 'student').get().then(function(student_data) {
      student_data.forEach(function(student) {
            var info = student.data();
            var table_row = $('<tr>');
            table_row.append($('<td class="mdl-data-table__cell--non-numeric">' + info.name + '</td>'));
            table_row.append($('<td>' + info.grade + '</td>'));
            table_row.append($('<td>' + info.concern + '</td>'));
            $('#students-table-body').append(table_row);
      })
});