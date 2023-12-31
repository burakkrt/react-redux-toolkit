import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {CustomHelmet} from "./helmet/CustomHelmetProvider.jsx";
import {HelmetProvider} from "react-helmet-async";
import Todos from "./components/Todos.jsx";
import Modal from "./Modal.jsx";
import {Provider} from "react-redux"
import {store} from "./stores/index.jsx"
import TodosVisible from "./TodosVisible.jsx";
import {AiFillGithub} from "react-icons/ai";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <HelmetProvider>
            <Provider store={store}>
                <CustomHelmet/>
                <div
                    className="d-flex flex-column justify-content-center align-items-center bg-secondary-subtle row-gap-3 p-5"
                    style={{minHeight: "100vh"}}>
                    <Todos/>
                    <TodosVisible/>
                    <div className="position-absolute bottom-0 end-0 m-5">
                        <a href="https://github.com/burakkrt" target="_blank" rel="noreferrer"
                           className="text-white bg-dark px-3 py-2 rounded text-decoration-none d-flex gap-1 shadow"><AiFillGithub
                            className="fs-5"/>Github</a>
                    </div>
                </div>
                <Modal/>
            </Provider>
        </HelmetProvider>
    </React.Fragment>,
)