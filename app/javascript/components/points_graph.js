// google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(graphPoint);

function graphPoint() {
  const data = google.visualization.arrayToDataTable(odd_graph);

  let options = {
    title: 'ODD vs. AMOUNT',
    hAxis: {title: 'odd'},
    vAxis: {title: 'amount'},
    legend: 'none',
    colors: ['#DC3912', '#109618'],
    dataOpacity: 0.5,
    series: {
      0: { pointShape: 'circle' },
      1: { pointShape: 'diamond' }
    }
  };

  const chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}


export { graphPoint };
