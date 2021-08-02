import { FETCH_POSTLIST_ERROR, FETCH_POSTLIST_SUCCESS, FETCH_POSTLIST_REQUEST } from './postListType';

const intitialState = {
    loading: false,
    postList: [],
    error: ''
}

const postListReducer = (state = intitialState, action) => {
    switch (action.type) {
        case FETCH_POSTLIST_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_POSTLIST_SUCCESS: return {
            ...state,
            loading: false,
            postList: action.payload,
            error: ''
        }
        case FETCH_POSTLIST_ERROR: return {
            ...state,
            loading: false,
            postList: [],
            error: action.payload
        }
        default: return state;
    }
}


export default postListReducer;