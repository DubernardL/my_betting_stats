google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(graphPoint);

function graphPoint() {
  var data = google.visualization.arrayToDataTable(odd_graph);

  console.log(odd_graph);

  var options = {
    title: 'Odd vs Amount',
    hAxis: {title: 'odd', minValue: 0, maxValue: 15},
    vAxis: {title: 'amount', minValue: 0, maxValue: 15},
    legend: 'none'
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}

export { graphPoint };
