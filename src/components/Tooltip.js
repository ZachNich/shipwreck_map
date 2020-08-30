import React, {useState, useEffect} from 'react'
import ApiManager from '../modules/modules'

const ShipDetails = props => {

    const [info, setInfo] = useState({})

    useEffect(() => {
        ApiManager.getShipDetails(props.id)
        .then(response => {
            const shipInfo = {
                "id": null,
                "name": props.name,
                "nationality": props.nationality,
                "date": props.date,
                "coordinates": {
                    "lat": props.lat,
                    "lon": props.lon
                  },
                "extract": response.query.pages[props.id].extract

            }
        })
    }, [])
    
    return (
        <article className='tooltip'>
            <section className='tooltip-img'>
                <img src={require('../images/historic-ship.png')} alt='Ship' />
            </section>
            <section className='tooltip-info'>
                <p>Here's where all the info goes</p>
            </section>
        </article>
    )
}

export default ShipDetails