import {legacy_createStore,applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'
import fetchReducer from './reducer'

let store=legacy_createStore(fetchReducer,applyMiddleware(thunk));


export default store;