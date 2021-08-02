import { FETCH_COMMENT_REQUEST, FETCH_COMMENT_ERROR, FETCH_COMMENT_SUCCESS } from './commentType';
import axios from 'axios';


export const fetchCommentRequest = () => {
    return {
        type: FETCH_COMMENT_REQUEST
    }
}
export const fetchCommentSuccess = (postComments) => {
    return {
        type: FETCH_COMMENT_SUCCESS,
        payload: postComments
    }
}
export const fetchCommentError = (error) => {
    return {
        type: FETCH_COMMENT_ERROR,
        payload: error
    }
}

export const fetchComment = (pageID) => {
    return (dispatch) => {
        dispatch(fetchCommentRequest())
        axios.get(`https://jsonplaceholder.typicode.com/posts/${pageID}/comments`)
            .then(response => {
                const data = response.data;
                dispatch(fetchCommentSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCommentError(errorMsg))
            })
    }
}