import {
    getCategories
} from './categories'
import {
    getAllPosts
} from './posts';

import {
    put,
    all
} from 'redux-saga/effects'
import {
    showLoading,
    hideLoading
} from 'react-redux-loading';

export function* handleInitialData(dispatch) {
    yield put(showLoading());

    yield all([
        getCategories(),
        getAllPosts()
    ]);



    yield put(hideLoading());


}