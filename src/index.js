import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();