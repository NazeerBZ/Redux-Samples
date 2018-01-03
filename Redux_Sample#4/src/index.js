import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from './store/store.js';
import {MyApp} from './components/app.js';

ReactDOM.render(
    <Provider store={Store}>
        <MyApp/>
    </Provider>
    ,document.getElementById("root"));