	google.charts.load('current', {'packages': ['geochart']});
      
	function drawPaysMap() {	
		var options = {};
		var dimension = "nbreFilms";
		
		$.getJSON("repartitionFilms.json",function(a){
		var b = new google.visualization.DataTable();
		b.addColumn("string","pays");
		b.addColumn("number","nbreFilms");
		a.valeurs.forEach(function(c,d){
			b.addRows([[a.pays[d],c]])
		});
		
		var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('geochart'));

        chart.draw(b, options);

	} 
	
	google.charts.setOnLoadCallback(drawPaysMap);
