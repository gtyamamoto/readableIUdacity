import { put, call } from 'redux-saga/effects';
import {getPosts,getPostsByCat,getPostById,deletePost,votePost,updatePost, newPost} from '../utils/api';
// import {compose} from 'ramda'

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST'
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_BY_CAT = 'GET_POSTS_BY_CAT'
export function* getAllPosts (){
  let response = yield call(getPosts);

  yield put({type:GET_POSTS,posts:response})
}
export function* getPostsFromCat({categoryID}){
  console.log('categoria',categoryID)
  let response = yield call( getPostsByCat,categoryID);
  console.log(response)
  yield put({type:GET_POSTS,posts:response})
}

export function* getPost ({id}){
  let response = yield call(getPostById,id);
 
  yield put({type:GET_POST,post:response})
}

export function* VotePost ({id,option}){
  let response = yield call(votePost,id,option);
 
  yield put({type:GET_POST,post:response})
}

export function* DeletePost({id}){
  let response =  yield call(deletePost,id);
  if(response.error) 
  window.location.href ='/error'
  else
  yield put ({type:DELETE_POST,id:id})
}
export function* UpdatePost({id,title,body}){
  let response = yield call(updatePost,id,title,body);
  yield put({type:GET_POST,post:response})
}

export function* CreatePost({title,body,author,category}){
  let response = yield call(newPost,title,body,author,category);
  yield put({type:GET_POST,post:response})
}



