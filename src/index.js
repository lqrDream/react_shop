import React from 'react';
import ReactDOM from 'react-dom';
// import './plugins/axios';
import './plugins/umi-request'
import {BrowserRouter} from 'react-router-dom'
import Default from "./layouts/default/default";
import './assets/css/base.css'

ReactDOM.render(
    <BrowserRouter>
        <Default/>
        {/*<LSwitchTest/>*/}
    </BrowserRouter>
    ,
    document.getElementById('root')
)

