import React from 'react';
import ReactDom from "react-dom";
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/app';

const store = createStore(allReducers);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));