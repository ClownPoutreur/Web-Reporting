	google.charts.load('current', {'packages': ['geochart']});
    google.charts.setOnLoadCallback(drawMarkersMap);
      
	function drawMarkersMap() {
		
      var data = $.ajax({
          url: "repartitionFilms.json", //Change this for the url where is allocated the json or php file
          dataType:"json",
          async: false
          }).responseText;

      jsonData = JSON.parse(data);
	  
      var options = {
		title : 'Repartition des films par nationalité dans une filmotheque personnelle',
      };

      var geochart = new google.visualization.GeoChart(document.getElementById('geochart'));
      chart.draw(data, options);  
	
	} 