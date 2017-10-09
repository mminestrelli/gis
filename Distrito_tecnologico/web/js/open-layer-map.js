var map = new ol.Map({
  target: 'ol-map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-58.400605, -34.639277]),
    zoom: 14
  })
});
