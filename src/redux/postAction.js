import { FETCH_POST_REQUEST, FETCH_POST_ERROR, FETCH_POST_SUCCESS } from './postType';
import axios from 'axios';


export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}
export const fetchPostSuccess = (post) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: post
    }
}
export const fetchPostError = (error) => {
    return {
        type: FETCH_POST_ERROR,
        payload: error
    }
}

export const fetchPost = (pageID) => {
    return (dispatch) => {
        dispatch(fetchPostRequest())
        axios.get(`https://jsonplaceholder.typicode.com/posts/${pageID}`)
            .then(response => {
                const data = response.data;
                dispatch(fetchPostSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchPostError(errorMsg))
            })
    }
}