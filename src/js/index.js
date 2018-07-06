/**
 * User: abhijit.baldawa
 */


import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import store from "./store/index";
import App from "./components/App";

window.mystore = store;

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("app")
);