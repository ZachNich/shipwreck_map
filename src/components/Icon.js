import React, {useState} from 'react'
import {createPortal} from 'react-dom'

const Icon = props => {
    const showDetails = e => {
        e.preventDefault()
        console.log(e.target)
        props.setCurrentID(e.target.id)
        props.setShowModal(true)
    }

    return (
        <img id={props.pageid} src={require('../images/historic-ship.png')} alt='Ship' onClick={showDetails} />
    )
}

export default Icon