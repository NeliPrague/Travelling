var map;

var prague = {lat: 50.08804, lng: 14.42076};
var cagliari = {lat: 39.23054, lng: 9.11917};

var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

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
    map: map,
    icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png'
  });

  var marker_2 = new google.maps.Marker({
    position: cagliari,
    map: map
  });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  marker.addListener('click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
    alert("test");
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

});
