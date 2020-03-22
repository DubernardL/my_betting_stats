google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);

function drawLogScales() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'id');
      data.addColumn('number', 'profit');

      data.addRows(line_graph);

      var options = {
        title: 'Profit over time',
        hAxis: {
          title: 'Bets',
        },
        vAxis: {
          title: 'Net profit',
          minValue: 0,
        },
        colors: ['#2c3b4f'],
        legend: { position: 'none' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('line_chart_div'));
      chart.draw(data, options);
    }

export { drawLogScales };
