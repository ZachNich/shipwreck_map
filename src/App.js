import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import HowTo from './HowTo';

const App = () => {
    return (
        <>
            <Route exact path="/details" render={props => <DetailsPage {...props} />} />
            <Route exact path="/" render={props => <HowTo {...props} />} />
        </>
    )
}

export default App