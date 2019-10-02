import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/rootReducer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(<Router>{window.location.pathname=="/" ? <Redirect to="/home" />: null}<Provider store={store}><App /></Provider></Router>, document.getElementById('root'));

serviceWorker.unregister();