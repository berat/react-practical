import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './reducers'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';


ReactDOM.render(
    <Router>
        {
            window.location.pathname === "/"
                ? <Redirect to="/home" />
                : null
        }
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();