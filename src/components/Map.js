import React, {useState, useEffect} from 'react'
import {createPortal} from 'react-dom'
import GoogleMapReact from 'google-map-react';
import APIkey from '../modules/api'
import Icon from './Icon'
import Tooltip from './Tooltip'
import getCoordinates from '../helpers/getCoordinates'
import ApiManager from '../modules/modules';

const Map = props => {

    const [showModal, setShowModal] = useState(false)
    const [shipwrecks, setShipwrecks] = useState([])

    useEffect(() => {
        const results = []

        ApiManager.getList("categorymembers", "max", "Category:Lists_of_shipwrecks_by_location")
            .then(response => {
                // console.log("response 1", response)
                response.query.categorymembers.forEach(category => {
                    ApiManager.getGenerator("links", "info", category.pageid, "max")
                        .then(response => {
                            // console.log("response 2", response)
                            if (response.query) {
                                Object.entries(response.query.pages).forEach(entry => {
                                    // console.log('entry', entry)
                                    if (entry[1].length) {
                                        ApiManager.getArticleByProp("coordinates", entry[0])
                                        .then(response => {
                                            // console.log("response 3", response)
                                            Object.entries(response.query.pages).forEach(entry => {
                                                // console.log("entry2", entry)
                                                if (entry[1].coordinates) {
                                                    // console.log("got the coords")
                                                    results.push({
                                                        "pageid": entry[0],
                                                        "coordinates": {
                                                            "lat": entry[1].coordinates[0].lat,
                                                            "lon": entry[1].coordinates[0].lon
                                                        }
                                                    })
                                                    // console.log("results prog", results)
                                                }
                                            })
                                            setShipwrecks(results)
                                        })
                                    }
                                })
                            }
                        })
                })
            })
    }, [])

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
            // onClick={toggleModal}
            key={mappedShipwreck.pageId}
            lat={mappedShipwreck.coordinates.lat}
            lng={mappedShipwreck.coordinates.lon}
            $hover={true}
            />
        )}
        </GoogleMapReact>
      </div>
    )
}

export default Map