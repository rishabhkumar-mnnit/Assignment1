import { FETCH_POSTLIST_REQUEST, FETCH_POSTLIST_ERROR, FETCH_POSTLIST_SUCCESS } from './postListType';
import axios from 'axios';


export const fetchPostListRequest = () => {
    return {
        type: FETCH_POSTLIST_REQUEST
    }
}
export const fetchPostListSuccess = (postList) => {
    return {
        type: FETCH_POSTLIST_SUCCESS,
        payload: postList
    }
}
export const fetchPostListError = (error) => {
    return {
        type: FETCH_POSTLIST_ERROR,
        payload: error
    }
}

export const fetchPostList = () => {
    return (dispatch) => {
        dispatch(fetchPostListRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(response => {
                const data = response.data;
                dispatch(fetchPostListSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchPostListSuccess(errorMsg))
            })
    }
}