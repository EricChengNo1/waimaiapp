import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {configShore} from "./store";
import './index.css';

const store = configShore();

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
