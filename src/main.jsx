import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { store } from 'src/Redux/store'
import { Provider } from 'react-redux'
import "daisyui"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter basename="/">
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </>
)