function initMap() {
	L.mapquest.key = 'MRpwb9ExVKxLhg6FS32SM9lfoPsLmCTU';

// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.8788033, -117.2381008],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}