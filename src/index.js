import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Import Reducers Below!

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    // Insert Reducers Below!
});

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
