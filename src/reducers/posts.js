import {GET_POSTS,DELETE_POST, GET_POST} from '../actions/posts';
import {keyBy} from 'lodash';

export default function posts(state={},action){

   switch(action.type){
       case GET_POSTS:
    
       //structuring the posts as an object with all the posts,if the api does not returned a single post it will set to 'no posts'
        return action.posts && action.posts.length ? {
    
            ...keyBy(action.posts,'id')
        } : 'no posts'
       
        case DELETE_POST:
        return {
            ...keyBy(action.posts.filter(post=>post.id!==action.id),'id')
        }
        case GET_POST:
        let {post} = action;
        delete state[post.id]
        return {
        ...state,
         ...keyBy([post],'id')

        }

       default: return state;
   }


}
