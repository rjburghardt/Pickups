import $ from 'jquery'
import Routes from './Routes.js'
import GMaps from 'gmaps'

$('.menu').on('click', function () {
  console.log(this);
  $(this).siblings('.nav-bar').toggleClass('expand');
})

GMaps.geocode({
  address: $('#address').val(),
  callback: function(results, status) {
    if (status == 'OK') {
      var latlng = results[0].geometry.location;
      map.setCenter(latlng.lat(), latlng.lng());
      map.addMarker({
        lat: latlng.lat(),
        lng: latlng.lng()
      });
    }
  }
});