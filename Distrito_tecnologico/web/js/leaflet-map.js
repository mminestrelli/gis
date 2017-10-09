var companies;
var districtArea;

var lmap = L.map('leaflet-map').setView([-34.639277, -58.400605], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(lmap);

function onEachCompanyFeature(feature, layer) {
  var popupContent ;
  if (feature.properties && feature.properties.empresa && feature.properties.estado && feature.properties.rubro) {
    popupContent = "<p>" + feature.properties.empresa +"</br>"+ "Estado: "+feature.properties.estado+"</br>"+ "Rubro: "+feature.properties.rubro+"</p>";
  }
  layer.bindPopup(popupContent);
}

$.getJSON('https://private-55ee92-gis8.apiary-mock.com/companies', null, function (data, status) {
  if (status === "success") {
    console.log(data);
    companies = data ;
    L.geoJSON(companies, {
      onEachFeature: onEachCompanyFeature,
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 3,
          fillColor: "#ffffff",
          color: "#969694",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.7
        });
      }
    }).addTo(lmap);
  }
});

$.getJSON('https://private-55ee92-gis8.apiary-mock.com/districtArea', null, function (data, status) {
  if (status === "success") {
    districtArea = data;
    L.geoJSON(districtArea).addTo(lmap);
  }
});
