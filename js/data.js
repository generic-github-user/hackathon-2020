var color = Chart.helpers.color;

function generateGraph() {
      scatterChartData = {
            datasets: [{
                  label: 'Students',
                  borderColor: window.chartColors.red,
                  backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
                  data: data
            }]
      };

      var ctx = document.getElementById('canvas').getContext('2d');
      window.myScatter = Chart.Scatter(ctx, {
            data: scatterChartData,
            options: {
                  title: {
                        display: true,
                        text: 'Grade & Risk Level'
                  },
                  scales: {
                        xAxes: [{
                              scaleLabel: {
                                    display: true,
                                    labelString: 'Average Grade'
                              }
                        }],
                        yAxes: [{
                              scaleLabel: {
                                    display: true,
                                    labelString: 'Concern level'
                              }
                        }]
                  }
            }
      });

      window.myScatter.update();
}

window.onload = function() {
      data = [];
      firebase.firestore().collection('users').where('type', '==', 'student').get().then(
            (students) => {
                  var results = []
                  students.forEach(
                        student => results.push(student)
                  )

                  Promise.all(results).then(
                        (results) => {
                              results.forEach(
                                    (student) => {
                                          // student.ref.collection('vibes').get().then(
                                          //       function(vibes) {
                                          //             var vibe_average = 0;
                                          //
                                          //             vibes.forEach(
                                          //                   function(vibe) {
                                          //                         vibe_average += vibe.data().level;
                                          //                   }
                                          //             );
                                          //
                                          //             vibe_average /= 10;
                                          //
                                          //             console.log(student.data().average_score)
                                          //             info = student.data();
                                          //             data.push({
                                          //                   x: info.average_score | 5,
                                          //                   y: vibe_average | 5
                                          //             });
                                          //       }
                                          // )

                                          student_data = student.data();
                                          var concern = Math.round(100 - student_data.average_score) + Math.random() * 100;

                                          a = student_data.average_score;
                                          b = concern;
                                          data.push({
                                                x: a != null ? a : Math.random() * 100,
                                                y: b != null ? b : Math.random() * 100
                                          });
                                    }
                              );

                              generateGraph();
                        }
                  )
            }
      )
};

// setTimeout(generateGraph, 3000)