import { combineReducers } from 'redux';
import postListReducer from './postListReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
const rootReducer = combineReducers({
    postList: postListReducer,
    post: postReducer,
    postComments: commentReducer,
})

export default rootReducer;