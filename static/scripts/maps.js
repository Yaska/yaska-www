function initializeMap(positionAsArray, containerByID) {
	//Map
	var LatLng = new google.maps.LatLng(positionAsArray[0], positionAsArray[1]);
	console.log(LatLng);
	var mapOptions = {
	  center: LatLng,
	  zoom: 14,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  streetViewControl: false,
	  panControl: false
	};
	
	map = new google.maps.Map(document.getElementById(containerByID),
	    mapOptions);
	
	var marker = new google.maps.Marker({
	    position: LatLng,
	    map: map
    })
    
    marker.setMap(map);
};

$(document).ready(function(){
	initializeMap([51.055799, 3.742372], 'BelgianMap');
	initializeMap([52.182732, 20.99762], 'PolishMap');
	console.log("did some mappin'");
});
