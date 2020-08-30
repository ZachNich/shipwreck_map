import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import DetailsPage from '../components/DetailsPage';
import HowTo from './HowTo';
import Map from './Map';

const App = () => {
    const [currentID, setCurrentID] = useState(null)

    return (
        <>
            <Route exact path="/details" render={props => <DetailsPage {...props} />} />
            <Route exact path="/" render={props => <> <HowTo {...props} /> <Map setCurrentID={setCurrentID} /> </>} />
        </>
    )
}

export default App