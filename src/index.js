import React from 'react';
import ReactDOM from 'react-dom';

// import from leaflet in node modules
import 'leaflet/dist/leaflet.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/sidebar.css';
import '../src/assets/css/mapfan.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';




ReactDOM.render(<AppRouter
/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
