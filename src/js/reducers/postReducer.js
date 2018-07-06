/**
 * User: abhijit.baldawa
 */

import {
    ADD_POSTS,
    ADD_CREATED_POST,
    IS_LOADING_POST,
    ERROR_POST,
    CLEAR_ERROR_POST
} from "../constants/action-types";

const initialState = {
    postsArr: [],
    isLoading: false,
    errorMessage: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING_POST:
            return {...state, isLoading: action.payload };
        case ADD_CREATED_POST:
            return {...state, postsArr: [action.payload, ...state.postsArr] };
        case ADD_POSTS:
            return {...state, postsArr: [...state.postsArr, ...action.payload]};
        case ERROR_POST:
            return {...state, errorMessage: action.payload};
        case CLEAR_ERROR_POST:
            return {...state, errorMessage: null };
        default:
            return state;
}};