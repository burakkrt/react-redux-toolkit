import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {CustomHelmet} from "./CustomHelmetProvider.jsx";
import {HelmetProvider} from "react-helmet-async";
import Todos from "./Todos.jsx";
import Modal from "./Modal.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <HelmetProvider>
            <CustomHelmet/>
            <div className="d-flex justify-content-center align-items-center bg-secondary-subtle"
                 style={{height: "100vh"}}>
                <Todos/>
            </div>
            <Modal/>
        </HelmetProvider>
    </React.Fragment>,
)