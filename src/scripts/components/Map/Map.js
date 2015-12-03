import React from 'react'
import { render } from 'react-dom'
import GMaps from 'gmaps'
import $ from 'jquery'

class Map extends React.Component {
  render() {
    return (
      <div id="map" className="map" />
    )
  }

  addMarker () {
    const map = new GMaps ({
      div: '#map',
      lat: 33,
      lng: -115,
      zoom: 7
    })

    let url = document.URL
    let gameId = url.substring(url.lastIndexOf('/') + 1)

    if(window.location.hash == '#/pickups/search') {
      return (
        $.get('http://localhost:3000/api/game')
          .then(data => {
            data.map(game => {
              GMaps.geocode({
                address: game.address + game.city + game.state,

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
          })
        })

        .fail((xhr, status) => {
          console.error(xhr, status)
        })
      )
    } else if (window.location.hash == '#/pickups/search/join/' + gameId ) {
      return ($.get('http://localhost:3000/api/game/' + gameId)

        .then(data => {
          data.map(game => {
            GMaps.geocode({
              address: game.address + game.city + game.state,

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
            })
          })
        })

        .fail((xhr, status) => {
          console.error(xhr, status)
        })
      )
    } else {
      $('#map-button').on('click', function(e) {
        e.preventDefault()
        map.removeMarkers()
        let address = $('#address').val()
        let city = $('#city').val()
        let state = $('#state').val()

        let completeAddress = address + city + state
        GMaps.geocode({
          address: completeAddress,
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
        })
      })
    }
  }

  componentDidMount() {
    this.addMarker()
  }
}

export default Map