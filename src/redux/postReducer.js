import { FETCH_POST_ERROR, FETCH_POST_SUCCESS, FETCH_POST_REQUEST } from './postType';

const intitialState = {
    loading: false,
    post: [],
    error: ''
}

const postReducer = (state = intitialState, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_POST_SUCCESS: return {
            ...state,
            loading: false,
            post: action.payload,
            error: ''
        }
        case FETCH_POST_ERROR: return {
            ...state,
            loading: false,
            post: [],
            error: action.payload
        }
        default: return state;
    }
}


export default postReducer;