import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import getDetails from './helpers/getDetails';
import getCoordinates from './helpers/getCoordinates';

let results = getCoordinates()
getDetails("13723388", false)

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);
