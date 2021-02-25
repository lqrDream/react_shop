import React from 'react';
import ReactDOM from 'react-dom';
// import Home from "./pages/home/home";
import './plugins/axios';
// import LnavTest from "./components/L-nav/Lnav.test";
import {BrowserRouter} from 'react-router-dom'
import LSwitchTest from "./components/L-switch/Lswitch.test";


ReactDOM.render(
    <BrowserRouter>
        {/*<LnavTest/>*/}
        <LSwitchTest/>
    </BrowserRouter>
    ,
    document.getElementById('root')
)

