/**
 * User: abhijit.baldawa
 */

import { ADD_PHOTOS, IS_LOADING_HOME, NEXTPAGE, ERROR_HOME, CLEAR_ERROR_HOME } from "../constants/action-types";

const initialState = {
    photosArr: [],
    page: 0,
    isLoading: false,
    errorMessage: null
};

export default (state = initialState, action) => {
   switch (action.type) {
       case IS_LOADING_HOME:
            return {...state, isLoading: action.payload };
       case ADD_PHOTOS:
            return {
                ...state,
                photosArr: [...state.photosArr, ...action.payload]
            };
       case NEXTPAGE:
           return {...state, page: state.page+1};
       case ERROR_HOME:
           return {...state, errorMessage: action.payload};
       case CLEAR_ERROR_HOME:
           return {...state, errorMessage: null};
       default:
            return state;
}};