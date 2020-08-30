import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Map from './components/Map';

ReactDOM.render(
  <Router>
    <Map />
  </Router>,
  document.getElementById('root')
);
