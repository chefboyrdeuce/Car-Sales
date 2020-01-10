import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { appReducer } from './reducers/index';


const rootElement = document.getElementById('root');
ReactDOM.render(
        <App />, 
    rootElement)
;


// let store = createStore(appReducer, applyMiddleware(logger, thunk));

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, 
//     rootElement)
// ;
