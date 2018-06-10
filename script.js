var map;

var prague = {lat: 50.08804, lng: 14.42076};
var cagliari = {lat: 39.23054, lng: 9.11917};


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // SYDNEY center: {lat: -34.397, lng: 150.644},
    center: prague,
    zoom: 4
  });
}

$( document ).ready(function() {
  var marker = new google.maps.Marker({
    position: prague,
    map: map
  });

  var marker_2 = new google.maps.Marker({
    position: cagliari,
    map: map
  });

});
