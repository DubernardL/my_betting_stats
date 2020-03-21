google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(columnChart);
function columnChart() {
  var data = google.visualization.arrayToDataTable(column_graph);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Bets amount average",
    bar: {groupWidth: "70%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}

export {columnChart};
