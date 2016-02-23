import { createStore, combineReducers, applyMiddleware } from 'redux';
import delayMiddleware from 'middleware/DelayMiddleware';
import clickReducer from 'component/CountButton/reducer';
import thunk from 'redux-thunk';
let createStoreWithMiddleware = applyMiddleware(delayMiddleware,thunk)(createStore);

let reducers = combineReducers({
    clickState: clickReducer
});

export default createStoreWithMiddleware(reducers);