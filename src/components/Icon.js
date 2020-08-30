import React, {useState} from 'react'
import {createPortal} from 'react-dom'
import Tooltip from './Tooltip'

const Icon = () => {

    const toggleModal = () => {
        showModal ? setShowModal(false) : setShowModal(true)
    }

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {showModal
                ? createPortal(<Tooltip />, document.getElementById('modal'))
                : null}
            <img src={require('../images/historic-ship.png')} alt='Ship' onClick={toggleModal} />
        </>
    )
}

export default Icon