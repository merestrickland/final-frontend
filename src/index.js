import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Redux/reducer'



// console.log(createStore)
// console.log(reducer)

let storeObj = createStore(reducer)
// console.log('this is the storeObj', storeObj.getState)
// console.log("this is the State", storeObj.getState())

ReactDOM.render(
    <BrowserRouter>
        <Provider store={storeObj}>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
