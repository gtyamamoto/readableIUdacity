import {GET_CATEGORIES} from '../actions/categories';


export default function posts(state=null,action){

   switch(action.type){
       case GET_CATEGORIES:
        return [
            
            ...action.categories.map(el=>el.name)
        ]

       default: return state;
   }


}