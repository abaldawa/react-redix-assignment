/**
 * User: abhijit.baldawa
 */

import {
    IS_LOADING_POST,
    ADD_CREATED_POST,
    ADD_POSTS,
    CLEAR_ERROR_POST,
    ERROR_POST
} from "../constants/action-types";

const loadingData = isLoading => ({type: IS_LOADING_POST, payload: isLoading});
const addCreatedPost = postObj => ({type:ADD_CREATED_POST, payload: postObj });
const addPosts = postArr => ({type: ADD_POSTS, payload: postArr});
const addError = errMsg => ({type: ERROR_POST, payload: errMsg});
const clearError = () => ({type: CLEAR_ERROR_POST});


const fetchPosts = () => {
    return async (dispatch) => {
        try{
            dispatch(loadingData(true));

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();

            dispatch(loadingData(false));
            dispatch(addPosts(json));
        } catch(err) {
            dispatch(loadingData(false));
            dispatch(addError("Error while loading Post page data"));
        }
    };
};

const addPost = (args) => {
    return async (dispatch) => {
        const
            {title, body, userId} = args;

        try{
            dispatch(loadingData(true));

            const response = await fetch('http://jsonplaceholder.typicode.com/posts', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        title,
                                        body,
                                        userId
                                    }),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                  });

            const json = await response.json();

            dispatch(loadingData(false));
            dispatch(addCreatedPost(json));
        } catch( e ) {
            dispatch(loadingData(false));
            dispatch(addError("Error while creating post"));
        }
    };
};

export {
    fetchPosts,
    addPost,
    clearError
};