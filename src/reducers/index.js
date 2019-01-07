import {combineReducers} from 'redux';

import comments from './comments';
import categories from './categories';
import posts from './posts';
import activePost from './activePost'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    categories,
    posts,
    activePost,
    comments,
    loadingBar:loadingBarReducer
})