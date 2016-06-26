    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawChart2);
      
    function drawChart2() {
      var jsonData = $.ajax({
          url: "machinesData.json", //Change this for the url where is allocated the json or php file
          dataType:"json",
          async: false
          }).responseText;

      jsonData = JSON.parse(jsonData);

      var jsonarray2 = [];
      jsonarray2[0] = ['Month', 'Production','Waste'];
      j = 1;
      table = "";

      for (var i = 0; i <= jsonData.length-1; i++) {
        // skip loop if the property is from prototype
          jsonarray2[j] = [jsonData[i].MachineID, parseFloat(jsonData[i].Production),parseFloat(jsonData[i].Waste)];
          j++;
      };
      var data2 = google.visualization.arrayToDataTable(jsonarray2);

      var view2 = new google.visualization.DataView(data2);

      var options = {
        title : 'Machine Production',
        hAxis: {title: "Machine ID"},
        seriesType: "bars",
        series: {5: {type: "line"}}
      };
    
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
      chart.draw(view2, options);


        var pieoptions = {
          title: 'Machine Production'
        };

        var pieChart = new google.visualization.PieChart(document.getElementById('piechart2'));

        pieChart.draw(view2, pieoptions);

    }