var color = Chart.helpers.color;

window.onload = function() {
      var data = [];
      firebase.firestore().collection('users').where('type', '==', 'student').get().then(
            function(students) {
                  students.forEach(
                        function(student) {
                              student.ref.collection('vibes').get().then(
                                    function(vibes) {
                                          var vibe_average = 0;

                                          vibes.forEach(
                                                function(vibe) {
                                                      vibe_average += vibe.data().level;
                                                }
                                          );

                                          vibe_average /= 10;

                                          console.log(student.data().average_score)
                                          info = student.data();
                                          data.push({
                                                x: info.average_score,
                                                y: vibe_average
                                          });

                                          var scatterChartData = {
                                                datasets: [{
                                                      label: 'My First dataset',
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
                                                            text: 'Chart.js Scatter Chart'
                                                      },
                                                }
                                          });

                                          window.myScatter.update();
                                    }
                              )
                        }
                  )


            }
      )
};