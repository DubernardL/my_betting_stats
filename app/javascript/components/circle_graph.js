google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable(result_bet_graph);

  var options = {
    title: 'Percentage bets win / lose',
    // is3D: true,
    slices: {
            0: { color: '#6ac46b' },
            1: { color: '#d8413c' }
          }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

export { drawChart };
