import React, {useState} from 'react'
import {createPortal} from 'react-dom'
import Tooltip from './Tooltip'

const Icon = () => {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        showModal ? setShowModal(false) : setShowModal(true)
    }

    return (
        <>
            {showModal
                ? createPortal(<Tooltip />, document.getElementById('modal'))
                : null}
            <img src={require('../images/historic-ship.png')} onClick={toggleModal} alt='Ship' />
        </>
    )
}

export default Icon