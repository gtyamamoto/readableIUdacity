
import { put, call } from 'redux-saga/effects';
import {getAllCategories} from '../utils/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';



export function* getCategories (){
  const categories = yield call(getAllCategories);
  yield put({type:GET_CATEGORIES,categories:categories.categories})
}