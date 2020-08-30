import React, { useState, useEffect } from 'react';
import getCoordinates from '../helpers/getCoordinates';
import './DetailsPage.css';

const DetailsPage = props => {

    const goHome = e => {
        e.preventDefault()
        props.history.push('/')
    }

    return (
        <div className="details_main">
            <div className="details_header">

            </div>
            <div className="details_subheader">

            </div>
            <div className="details_content">

            </div>
            <div className="details_footer">
                <button onClick={goHome}>Home</button>
            </div>
        </div>
    )
}

export default DetailsPage