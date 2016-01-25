// From MDN: 
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation

function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

// Run

if ("geolocation" in navigator) {
  /* geolocation is available */
  console.log("available");
  
    navigator.geolocation.getCurrentPosition(function(position) {
        //do_something(position.coords.latitude, position.coords.longitude);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var prec = position.coords.precision;
        
        console.log("lat: " + lat + ", lon: " + lon + ", precision: " + prec);
        
        document.getElementById("lat").innerHTML = lat;
        document.getElementById("lon").innerHTML = lon;
    });
} else {
  /* geolocation IS NOT available */
  console.log("not available");
}