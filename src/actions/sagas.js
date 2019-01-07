

import{handleInitialData} from './shared';
import {getPostsFromCat,getAllPosts,getPost,DeletePost, VotePost, UPDATE_POST_REQUEST, UpdatePost, CREATE_POST_REQUEST, CreatePost} from './posts';
import {all,takeEvery } from 'redux-saga/effects';
import {GET_ALL_POSTS,GET_POSTS_BY_CAT,GET_POST_REQUEST,DELETE_POST_REQUEST,VOTE_POST} from './posts'
import { GET_COMMENTS_REQUEST, getComments, VOTE_COMMENT, VoteComment, UPDATE_COMMENT_REQUEST, UpdateComment, DELETE_COMMENT_REQUEST, DeleteComment, POST_COMMENT_REQUEST, PostComment } from './comments';



export default function* rootSaga() {
    yield all([
        handleInitialData(),
        takeEvery(GET_POSTS_BY_CAT,getPostsFromCat),
        takeEvery(GET_ALL_POSTS,getAllPosts),
        takeEvery(DELETE_POST_REQUEST,DeletePost),
        takeEvery(VOTE_POST,VotePost),
        takeEvery(GET_POST_REQUEST,getPost),
        takeEvery(UPDATE_POST_REQUEST,UpdatePost),
        takeEvery(CREATE_POST_REQUEST,CreatePost),
        takeEvery(GET_COMMENTS_REQUEST,getComments),
        takeEvery(VOTE_COMMENT,VoteComment),
        takeEvery(UPDATE_COMMENT_REQUEST,UpdateComment),
        takeEvery(DELETE_COMMENT_REQUEST,DeleteComment),
        takeEvery(POST_COMMENT_REQUEST,PostComment)

    ])
  }