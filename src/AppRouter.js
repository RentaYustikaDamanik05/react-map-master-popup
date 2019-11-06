import React from 'react';
import { BrowserRouter , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/maps.css'
import Apps from './AppForclime/AppMap';
import App from './AppForclime/AppMainMap';
// import AppJS from '../src/coba2/App'



function AppRouter (){
    return(
    <div>

        <BrowserRouter>
            <Route exact path ='/' component = {Apps} />
            {/*<Route exact path = '/' component={AppJS} />*/}
            <Route exact path ='/AppMainMap' component = {App} />
        </BrowserRouter>
    </div>
    )
} export default AppRouter