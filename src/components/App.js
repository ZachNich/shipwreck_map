import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import DetailsPage from '../components/DetailsPage';
import HowTo from './HowTo';
import Map from './Map';
import ShipDetails from './ShipDetails';

const App = () => {
    const [currentID, setCurrentID] = useState(null)

    return (
        <>
            <Route exact path="/details" render={props => <DetailsPage {...props} />} />
            <Route exact path="/" render={props => <> <HowTo {...props} /> <Map setCurrentID={setCurrentID} {...props}/> </>} />
            <Route exact path="/:pageId(\d+)" render={props => <ShipDetails {...props}/>} />
        </>
    )
}

export default App