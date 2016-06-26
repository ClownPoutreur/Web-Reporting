	google.charts.load('current', {'packages': ['geochart']});
      
	function drawPaysMap() {	
		var options = {};
		var dimension = "nbreFilms";
		
		$.ajax({
			url: "repartitionFilms.json",
			dataType: "JSON"
			}).done(function(data) {
                var array = [["Pays",dimension]];
                $.each(data.pays, function() {
                    var paysItem = [this.pays, this[dimension]];
                    array.push(paysItem);
                });
			var paysData = google.visualization.arrayToDataTable(array);
			var chart = new google.visualization.GeoChart(document.getElementById('geochart'));
			chart.draw(paysData, options);
			$("h3").append(" Sorted by  "+dimension);
        });
	} 
	
	google.charts.setOnLoadCallback(drawPaysMap);
