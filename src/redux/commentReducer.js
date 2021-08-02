import { FETCH_COMMENT_ERROR, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_REQUEST } from './commentType';

const intitialState = {
    loading: false,
    postComments: [],
    error: ''
}

const commentReducer = (state = intitialState, action) => {
    switch (action.type) {
        case FETCH_COMMENT_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_COMMENT_SUCCESS: return {
            ...state,
            loading: false,
            postComments: action.payload,
            error: ''
        }
        case FETCH_COMMENT_ERROR: return {
            ...state,
            loading: false,
            postComments: [],
            error: action.payload
        }
        default: return state;
    }
}


export default commentReducer;