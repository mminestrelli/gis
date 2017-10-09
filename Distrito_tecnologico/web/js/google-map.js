var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 14,
    center: {lat: -34.639277, lng: -58.400605 }
  });
  map.data.loadGeoJson('data/distrito_tecnologico.geojson');
  map.data.loadGeoJson('data/empresas_dt.geojson');
}
