import {GET_POST,DELETE_POST} from '../actions/posts';


export default function posts(state={},action){

   switch(action.type){
       case GET_POST:
       //update the active post to the requested one
        return {
                 ...action.post
        }
        //clear the active post
        case DELETE_POST:
        return {

        }



       default: return state;
   }


}
