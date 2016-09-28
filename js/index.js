import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers';
import App from './components/app';


let store = createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'));
