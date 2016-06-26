var jsonData = $.ajax({
	url: "data/hotspotData.json", //Change this for the url where is allocated the json or php file
	dataType:"json",
	async: false
}).responseText;

jsonData = JSON.parse(jsonData);

var mymap = L.map('mapid').setView([48.864716, 2.349014], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'osednaca.0f2k8n2i',
	accessToken: 'pk.eyJ1Ijoib3NlZG5hY2EiLCJhIjoiY2lwb2k4MGZ3MDF5NGZvbTMwbmJpZzU2NSJ9.wCrF0ceReQLZr1XNASxatA'
}).addTo(mymap);


for (var i = 0; i < jsonData.length; i++) {
	var marker = L.marker([jsonData[i].fields.geo_point_2d[0], jsonData[i].fields.geo_point_2d[1]]).addTo(mymap);
	marker.bindPopup(jsonData[i].fields.nom_site);
};