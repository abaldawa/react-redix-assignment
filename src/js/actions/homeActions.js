/**
 * User: abhijit.baldawa
 */

import { ADD_PHOTOS, IS_LOADING_HOME, NEXTPAGE, ERROR_HOME, CLEAR_ERROR_HOME } from "../constants/action-types";

const loadingData = isLoading => ({type: IS_LOADING_HOME, payload: isLoading});
const addPhotos = photosArr => ({type:ADD_PHOTOS, payload: photosArr });
const nextPage = () => ({type: NEXTPAGE});

const addError = errMsg => ({type: ERROR_HOME, payload: errMsg});
const clearError = () => ({type: CLEAR_ERROR_HOME});

const fetchPosts = () => {
    return  async (dispatch, getState) => {
        try{
            dispatch(nextPage());
            dispatch(loadingData(true));

            const response = await fetch(`http://jsonplaceholder.typicode.com/photos?_page=${getState().home.page}`);
            const json = await response.json();

            dispatch(loadingData(false));
            dispatch(addPhotos(json));
        } catch(err) {
            dispatch(loadingData(false));
            dispatch(addError("Error while loading Home page data"));
        }
    };
};

export {
    fetchPosts,
    clearError
}
