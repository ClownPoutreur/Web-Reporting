var data = [{
	value: 6,
	color: "#E0B83D",
	label: "Paris 1er"
}, {
	value: 3,
	color: "#A5B339",
	label: "Paris 2ème"
}, {
	value: 8,
	color: "#519447",
	label: "Paris 3ème"
}, {
	value: 23,
	color: "#398E9A",
	label: "Paris 4ème"
}, {
	value: 13,
	color: "#4E96C6",
	label: "Paris 5ème"
}, {
	value: 5,
	color: "#6694C6",
	label: "Paris 6ème"
}, {
	value: 11,
	color: "#606FE4",
	label: "Paris 7ème"
}, {
	value: 11,
	color: "#9B6090",
	label: "Paris 8ème"
}, {
	value: 10,
	color: "#944C87",
	label: "Paris 9ème"
}, {
	value: 15,
	color: "#342D67",
	label: "Paris 10ème"
}, {
	value: 16,
	color: "#144E57",
	label: "Paris 11ème"
}, {
	value: 25,
	color: "#024B97",
	label: "Paris 12ème"
}, {
	value: 31,
	color: "#94445C",
	label: "Paris 13ème"
}, {
	value: 19,
	color: "#7445A7",
	label: "Paris 14ème"
}, {
	value: 25,
	color: "#244557",
	label: "Paris 15ème"
}, {
	value: 15,
	color: "#2EFE2E",
	label: "Paris 16ème"
}, {
	value: 14,
	color: "#0000ff",
	label: "Paris 17ème"
}, {
	value: 14,
	color: "#D44E47",
	label: "Paris 18ème"
}, {
	value: 22,
	color: "#A25A57",
	label: "Paris 19ème"
}, {
	value: 30,
	color: "#B45C02",
	label: "Paris 20ème"
}

]

var options = {
	animation: true,
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\" style=\"list-style-type: none;\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;<%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

//Get the context of the canvas element we want to select
var c = $('#myChart');
var ct = c.get(0).getContext('2d');
var ctx = document.getElementById("myChart").getContext("2d");
/*************************************************************************/
myNewChart = new Chart(ct).Doughnut(data, options);
document.getElementById("legend").innerHTML = myNewChart.generateLegend();