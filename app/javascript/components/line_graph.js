google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);

function drawLogScales() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'id');
      data.addColumn('number', 'yield');

      data.addRows(line_graph);

      var options = {
        title: 'Return on investment',
        hAxis: {
          title: 'Bets'
        },
        vAxis: {
          title: 'ROI'
        },
        backgroundColor: '#f1f8e9',
        legend: { position: 'none' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('line_chart_div'));
      chart.draw(data, options);
    }

export { drawLogScales };
