
import UpCounter from './reducers/upcounter.js';
import DownCounter from './reducers/downcounter.js';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    UpCounter,
    DownCounter
})

export const Store = createStore(rootReducer);
