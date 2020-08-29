import React from 'react'
import GoogleMapReact from 'google-map-react';
import APIkey from '../modules/api'
import Icon from './Icon'

const Map = props => {

    const mapDefaults = {
        center: {
            lat: 59.95,
            lng:30.33
        },
        zoom: 11
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIkey }}
          defaultCenter={mapDefaults.center}
          defaultZoom={mapDefaults.zoom}
        >
            <Icon
            lat={59.955413}
            lng={30.337844}
            />
        </GoogleMapReact>
      </div>
    )
}

export default Map