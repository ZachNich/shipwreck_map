import React, {useState, useEffect} from 'react'
import {createPortal} from 'react-dom'
import GoogleMapReact from 'google-map-react';
import APIkey from '../modules/api'
import Icon from './Icon'
import Tooltip from './Tooltip'
import ApiManager from '../modules/modules';

const Map = props => {

    const [showModal, setShowModal] = useState(false)
    const [shipwrecks, setShipwrecks] = useState([])

    const toggleModal = () => {
        showModal ? setShowModal(false) : setShowModal(true)
    }

    const mapDefaults = {
        center: {
            lat: 34.782599,
            lng:-40.923967
        },
        zoom: 2
    }

    useEffect(() => {
        const fetching = () => {
            return fetch('http://localhost:8088/shipwrecks')
                .then(result => result.json())
        }
        fetching()
        .then(results => setShipwrecks(results))
    }, [])

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIkey }}
          defaultCenter={mapDefaults.center}
          defaultZoom={mapDefaults.zoom}
        >
        {showModal
            ? createPortal(<Tooltip />, document.getElementById('modal'))
            : null}
        {shipwrecks.map(mappedShipwreck =>
            <Icon
            onClick={toggleModal}
            key={mappedShipwreck.pageid}
            lat={mappedShipwreck.coordinates.lat}
            lng={mappedShipwreck.coordinates.lon}
            // $hover={true}
            />
        )}
        </GoogleMapReact>
      </div>
    )
}

export default Map