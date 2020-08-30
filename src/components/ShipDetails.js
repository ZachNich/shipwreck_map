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
            setInfo(shipInfo)
        })
    }, [])
    
    return (
        <article className="details_main">
            <img src={info.img} alt="pic" />
            <section>
                {info.extract}
            </section>
        </article>
    )
}

export default ShipDetails