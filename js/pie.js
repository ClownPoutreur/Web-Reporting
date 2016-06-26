google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var jsonData = $.ajax({
		url: "data/data.json", //Change this for the url where is allocated the json or php file
		dataType:"json",
		async: false
	}).responseText;

	jsonData = JSON.parse(jsonData);

	$("#iot_name").html(jsonData[0].name)
	$("#iot_description").html(jsonData[0].description)
	$("#iot_timezone").html(jsonData[0].timezone)

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Date');
	data.addColumn('number', 'Data1');
	data.addColumn('number', 'Data2');
	arr = new Array();
	if(jsonData.length != undefined) {
		for (var i = 1; i < jsonData.length; i++) {
			arr[0] = [jsonData[i].created];
			Object.keys(jsonData[i]).forEach(function(key,index) {
				// key: the name of the object key
				// index: the ordinal position of the key within the object 
				//console.log(jsonData[i][key]);
				if(key!="_id" && key!="created"){
					arr[0].push(jsonData[i][key]);
				}
			});
			console.log(arr)
			data.addRows(arr);
		};
	}
	console.log(data)
	var options = {
		title: 'Offline Pie Chart',
		fontSize: 12
	};

	var chart = new google.visualization.PieChart(document.getElementById('curve_chart'));

	chart.draw(data, options);
}