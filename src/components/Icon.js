import React from 'react'
import Tooltip from './ShipDetails'

const Icon = props => {
    const showDetails = e => {
        e.preventDefault()
        console.log(e.target)
        props.setCurrentID(e.target.id)
        props.setShowModal(true)
    }

    return (
        <img id={props.pageid} src={require('../images/historic-ship.png')} alt='Ship' onClick={() => props.history.push(`/${props.pageid}`)} />
    )
}

export default Icon