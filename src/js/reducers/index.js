/**
 * User: abhijit.baldawa
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from './homeReducer';
import post from './postReducer';

export default combineReducers({
    home,
    post,
    routing: routerReducer
});