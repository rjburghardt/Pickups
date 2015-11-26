import React from 'react'
import { render } from 'react-dom'
import GMaps from 'gmaps';

class Map extends React.Component {
  render() {
    return (
      <div id="map" className="map" />
    )
  }
  componentDidMount() {
    const map = new GMaps({
      div: '#map',
      lat: -12.043333,
      lng: -77.028333
    })
  }
}

export default Map