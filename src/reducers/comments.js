import {GET_COMMENTS, DELETE_COMMENT, UPDATE_COMMENT, POST_COMMENT} from '../actions/comments';

import _ from 'lodash'
export default function posts(state=[],action){
    let {comments,comment} = action;
   switch(action.type){
       case GET_COMMENTS:
       
        return _.orderBy([
            ...comments
        ],['voteScore'],['desc'])
        case DELETE_COMMENT:
        return _.orderBy([
            ...state.filter(el=>el.id!==action.id)
        ],['voteScore'],['desc'])
        case UPDATE_COMMENT:
   
        return _.orderBy([
            ...state.filter(el=>el.id!==action.comment.id),
            comment
        ],['voteScore'],['desc'])
        case POST_COMMENT:
       
        return _.orderBy([
            ...state,
            comment
        ],['voteScore'],['desc'])

       default: return state;
   }


}