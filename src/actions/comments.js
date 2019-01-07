import { getAllComments, updateComment, deleteComment, voteComment,newComment } from "../utils/api";
import { put, call } from 'redux-saga/effects';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const POST_COMMENT = 'POST_COMMENT';
export const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST';

export function* getComments ({id}){
   
    let response = yield call(getAllComments,id);
    
    yield put({type:GET_COMMENTS,comments:response})
}
export function* UpdateComment ({id,body}){
    let response = yield call(updateComment,id,body);
    
    yield put({type:UPDATE_COMMENT,comment:response})
}

export function* VoteComment ({id,option}){
    let response = yield call(voteComment,id,option);
   
    yield put({type:UPDATE_COMMENT,comment:response})
  }

export function* DeleteComment ({id}){
   yield call(deleteComment,id);
    yield put ({type:DELETE_COMMENT,id:id})
}
export function* PostComment ({body,parentID,author}){
    let response = yield call(newComment,body,author,parentID);
   
    yield put({type:POST_COMMENT,comment:response})
}


