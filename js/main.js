// initialize and add the map
function initMap(){  
  // your location
  const loc = {lat:50.508390, lng: 30.582060};
  // centered map on location
  const map = new google.maps.Map(document.querySelector('.map')
    ,{
      Zoom:14,
      center:loc
    });
    //The maker, positioned at location
    const marker = new google.maps.marker({
      position: loc, map: map
    });



}