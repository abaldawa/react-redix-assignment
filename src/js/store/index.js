/**
 * User: abhijit.baldawa
 */

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {};
const middleware = [thunk];

export default createStore(rootReducer, initialState, applyMiddleware(...middleware));