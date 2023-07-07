import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {CustomHelmet} from "./CustomHelmetProvider.jsx";
import {HelmetProvider} from "react-helmet-async";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <HelmetProvider>
            <CustomHelmet/>
        </HelmetProvider>
    </React.Fragment>,
)