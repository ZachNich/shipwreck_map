import React, {useState} from 'react'
import {createPortal} from 'react-dom'
import GoogleMapReact from 'google-map-react';
import APIkey from '../modules/api'
import Icon from './Icon'
import Tooltip from './Tooltip'

const Map = props => {

    // const [showModal, setShowModal] = useState(false)

    // const toggleModal = () => {
    //     showModal ? setShowModal(false) : setShowModal(true)
    // }

    const mapDefaults = {
        center: {
            lat: 34.782599,
            lng:-40.923967
        },
        zoom: 2
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIkey }}
          defaultCenter={mapDefaults.center}
          defaultZoom={mapDefaults.zoom}
        >
            <Icon
            // onClick={toggleModal}
            lat={59.955413}
            lng={30.337844}
            $hover={true}
            />
        </GoogleMapReact>
      </div>
    )
}

export default Map