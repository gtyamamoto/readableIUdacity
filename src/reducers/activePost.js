import {GET_POST,DELETE_POST} from '../actions/posts';


export default function posts(state={},action){

   switch(action.type){
       case GET_POST:
       console.log('statess',state);
       console.log(action.post)
        return {
                 ...action.post
        }
        case DELETE_POST:
        return {

        }



       default: return state;
   }


}
