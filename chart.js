    google.load('visualization', '1', {'packages': ['corechart', 'bar']});
      
    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawChart);
      
    function drawChart() {
      var jsonData = $.ajax({
          url: "getData.json", //Change this for the url where is allocated the json or php file
          dataType:"json",
          async: false
          }).responseText;

      jsonData = JSON.parse(jsonData);

      var jsonarray = [];
      jsonarray[0] = ['Month', 'Production'];
      i = 1;
      table = "";

      for (var month in jsonData[0].fields) {
        // skip loop if the property is from prototype
        if (!jsonData[0].fields.hasOwnProperty(month)) continue;
        if(month != "total_arrondissement_2011"){
          var obj = jsonData[0].fields[month];
          jsonarray[i] = [month, parseInt(jsonData[0].fields[month].replace(/ /g,''))];
          table +=  "<tr><td>"+month+"</td><td>"+jsonData[0].fields[month]+"</td></tr>";
          i++;
        }
      };
      table += "<tr><td><b>Total</b></td><td>"+jsonData[0].fields["total_arrondissement_2011"]+"</td></tr>";
      console.log(jsonarray);
      document.getElementById("tabledata").innerHTML = table;
      var data = google.visualization.arrayToDataTable(jsonarray);

      var view = new google.visualization.DataView(data);

      var options = {
        title : 'Tonnages des dechets bacs verts',
        hAxis: {title: "Month"},
        seriesType: "bars",
        series: {5: {type: "line"}}
      };
    
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(view, options);


        var pieoptions = {
          title: 'Tonnages des dechets bacs verts'
        };

        var pieChart = new google.visualization.PieChart(document.getElementById('piechart'));

        pieChart.draw(view, pieoptions);

    }