var map;
var markers = [];
var contentString = "";
var prague = {lat: 50.08804, lng: 14.42076};
var cagliari = {lat: 39.23054, lng: 9.11917};

// var sourceData = [prague, cagliari];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // SYDNEY center: {lat: -34.397, lng: 150.644},
    center: prague,
    zoom: 4
  });

  addMapContent();
}


function addMapContent() {
  var infowindow = new google.maps.InfoWindow({
    // content: getContent(sourceData[i])
    content: contentString
  });

  for (i=0; i<sourceData.length; i++)
  {
    console.log(sourceData[i].latitude);
    console.log(sourceData[i].longitude);
    var marker = new google.maps.Marker({
      position: {
        lat: sourceData[i].latitude,
        lng: sourceData[i].longitude
      },
      map: map,
      icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png'
    });

    // marker.addListener('click', function() {
    //   map.setZoom(8);
    //   map.setCenter(marker.getPosition());
    //   console.log(marker);
    // });

    console.log(sourceData[i]);
    infowindow.setContent(getContent(sourceData[i]));

     google.maps.event.addListener(marker, 'click', function() {

      infowindow.open(map, this);
      console.log('test');
    });

    markers.push(marker);
  }


  // var marker = new google.maps.Marker({
  //   position: prague,
  //   map: map,
  //   icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png'
  // });
  //
  // var marker_2 = new google.maps.Marker({
  //   position: cagliari,
  //   map: map
  // });

}

function getContent(sourceData) {
  console.log(sourceData);
  var contentString = `<h2>${sourceData.Name}</h2><p>${sourceData.info}</p>`;
  return contentString;
}
