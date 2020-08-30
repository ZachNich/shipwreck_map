import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const HowTo = props => {
    const [hover, setHover] = useState(false)

    return (
        <div className="how_to_container"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
        {hover ? 
        <p>Explore a vast world map of past shipwrecks. Click on a ship to learn more about the wreck.</p>
        :
        <FontAwesomeIcon icon={faInfoCircle} />
        }
        </div>
    )
}

export default HowTo