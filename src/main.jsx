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
            <div className="d-flex flex-column align-items-center justify-content-center w-100 row-gap-2"
                 style={{height: "100vh"}}>
                <h3>The under construction</h3>
                <h3 className="text-danger opacity-50">TR: Yapım aşamasında</h3>
                <div className="progress bg-secondary-subtle progress-bar-striped progress-bar-animated mt-2"
                     style={{width: "284px", height: "24px"}}
                     role="progressbar"
                     aria-label="The under construction"
                     aria-valuenow="38" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                         style={{width: "38%"}}>38%
                    </div>
                </div>
            </div>
        </HelmetProvider>
    </React.Fragment>,
)